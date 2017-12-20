/*jshint esversion: 6 */
var actionPickup = {
  run: function(creep) {
    let startCPU = Game.cpu.getUsed();
    creep.say('✨');
    creep.memory.action = 'rangePickup';

    if (creep.room.name != creep.memory.targetRoom) {
      if (!creep.memory.path) {
        const exit = creep.room.findExitTo(creep.memory.targetRoom);
        const exitTile = creep.pos.findClosestByPath(exit);
        creep.memory.path = creep.room.findPath(creep.pos, exitTile);
        creep.moveByPath(creep.memory.path);
        return true;
      } else {
        creep.moveByPath(creep.memory.path);
        return true;
      }
    } else {
      delete creep.memory.path;
      //creep.moveTo(25, 25);
      if (!creep.target) {
        let _droppedResources = creep.room.FIND_DROPPED_RESOURCES();
        let _sorted = _.sortBy(_droppedResources, r => creep.pos.getRangeTo(r));
        for (var i in _sorted) {
          creep.target = _sorted[i];
          creep.memory.action = 'pickup';
          console.log(_sorted[i].amount);
          console.log(_sorted[i].room);
          if (_sorted[i].amount > 200 && _sorted[i].room == creep.memory.targetRoom) {
            console.log(_sorted[i].amount);
            creep.target = _sorted[i];
            creep.memory.action = 'pickup';
            break;
          }
        }
      }

      if (!creep.target) {
        creep.memory.action = 'idle';
        return false;
      } else {

        switch (creep.pickup(creep.target)) {
          case OK:
            //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : Pickup : OK : ' + creep.target + ' : Energy : ' + creep.target.amount);
            creep.memory.action = 'idle';
            delete creep.memory.target;
            break;
          case ERR_NOT_OWNER:
            //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : Pickup : ERR_NOT_OWNER');
            break;
          case ERR_BUSY:
            //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : Pickup : ERR_BUSY');
            break;
          case ERR_INVALID_TARGET:
            //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : Pickup : ERR_INVALID_TARGET : ' + creep.target);
            creep.memory.action = 'idle';
            delete creep.memory.target;
            break;
          case ERR_FULL:
            //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : Pickup : ERR_FULL');
            creep.memory.action = 'idle';
            delete creep.memory.target;
            break;
          case ERR_NOT_IN_RANGE:
            creep.moveTo(creep.target);
            //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : Pickup : ERR_NOT_IN_RANGE : Moving to : ' + creep.target + ' : Energy : ' + creep.target.amount);
            break;
          default:
        }
        return true;
      }
    }
  }
};
module.exports = actionPickup;
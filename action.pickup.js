/*jshint esversion: 6 */
var actionPickup = {
  run: function(creep) {
    let startCPU = Game.cpu.getUsed();
    creep.say('✨');
    if (!creep.target) {
      let _droppedResources = creep.room.FIND_DROPPED_RESOURCES();
      let _sorted = _.sortBy(_droppedResources, r => creep.pos.getRangeTo(r));
      for (var i in _sorted) {
        if (_sorted[i].amount > 200 && _sorted[i].room == creep.memory.targetRoom) {
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
};
module.exports = actionPickup;
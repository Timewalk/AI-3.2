/*jshint esversion: 6 */

var actionTransfer = {
  run: function(creep) {
    creep.say('⚡');
    let startCPU = Game.cpu.getUsed();
    creep.memory.action = 'rangeTransfer';

    if (creep.room.name != creep.memory.home) {
      if (!creep.memory.path) {
        const exit = creep.room.findExitTo(creep.memory.home);
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

      if (!creep.target && creep.room.STRUCTURE_STORAGE.length > 0) {
        for (let i in creep.room.STRUCTURE_STORAGE) {
          if (creep.room.STRUCTURE_STORAGE[i].store[RESOURCE_ENERGY] < creep.room.STRUCTURE_STORAGE[i].storeCapacity) {
            creep.target = creep.room.STRUCTURE_STORAGE[i];
            creep.memory.action = 'rangeTransfer';
            break;
          }
        }
      }


      if (!creep.target) {
        creep.memory.action = 'idle';
        return false;
      }
      let resource = RESOURCE_ENERGY;

      switch (creep.transfer(creep.target, resource)) {
        case OK:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : OK');
          creep.memory.action = 'idle';
          delete creep.memory.target;
          break;
        case ERR_NOT_OWNER:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : ERR_NOT_OWNER');
          break;
        case ERR_BUSY:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : ERR_BUSY');
          break;
        case ERR_NOT_FOUND:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : ERR_NOT_FOUND');
          break;
        case ERR_NOT_ENOUGH_RESOURCES:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : ERR_NOT_ENOUGH_RESOURCES');
          creep.memory.action = 'idle';
          break;
        case ERR_INVALID_TARGET:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : ERR_INVALID_TARGET : ' + creep.target);
          creep.memory.action = 'idle';
          break;
        case ERR_NOT_IN_RANGE:
          creep.moveTo(creep.target);
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : ERR_NOT_IN_RANGE : Moving to : ' + creep.target);
          break;
        case ERR_NO_BODYPART:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : ERR_NO_BODYPART');
          break;
        default:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : ERR_DEFAULT : ' + creep.target + ' : ' + resource);
          break;
      }

      return true;
    }
  }
};
module.exports = actionTransfer;
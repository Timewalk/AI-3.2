/*jshint esversion: 6 */
var actionReserveController = {
  run: function(creep) {
    creep.say('🏳️‍🌈');
    let startCPU = Game.cpu.getUsed();
    creep.memory.action = 'rangeReserveController';

    if (creep.room.name != creep.memory.targetRoom) {
      if (!creep.memory.path) {
        const exit = creep.room.findExitTo(creep.memory.targetRoom);
        const exitTile = creep.pos.findClosestByPath(exit);
        creep.memory.path = creep.room.findPath(creep.pos, exitTile);
        creep.moveByPath(creep.memory.path);
      } else {
        creep.moveByPath(creep.memory.path);
      }

    } else {
      delete creep.memory.path;
      if (!creep.target && creep.room.controller) {
        creep.target = creep.room.controller;
      }
      if (!creep.target) {
        return false;
      }


      switch (creep.reserveController(creep.target)) {
        case OK:
          break;
        case ERR_NOT_OWNER:
          //console.log('actionHarvest : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : harvest : ERR_NOT_OWNER');
          break;
        case ERR_BUSY:
          //console.log('actionHarvest : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : harvest : ERR_BUSY');
          break;
        case ERR_INVALID_TARGET:
          //console.log('actionHarvest : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : harvest : ERR_NOT_FOUND');
          break;
        case ERR_NOT_IN_RANGE:
          //console.log('actionHarvest : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : harvest : ERR_NOT_IN_RANGE : Moving to : ' + creep.target + ' : Energy : ' + creep.target.energy);
          creep.moveTo(creep.target);
          break;
        case ERR_NO_BODYPART:
          //console.log('actionHarvest : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : harvest : ERR_NO_BODYPART');
          break;
      }
      return true;
    }
  }


};
module.exports = actionReserveController;
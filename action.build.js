/*jshint esversion: 6 */

var actionBuild = {
  run: function(creep) {
    let startCPU = Game.cpu.getUsed();
    creep.say('🚧');

    if (!creep.target) {
      if (creep.buildType) {
        creep.room.UPDATES[creep.buildType] = true;
        delete creep.memory.buildType;
      }
      if (creep.room.find(FIND_CONSTRUCTION_SITES).length > 0) {
        creep.memory.action = 'build';
        creep.target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
      } else {
        creep.memory.action = 'idle';
        delete creep.memory.target;
      }
    }

    if (!creep.target || creep.target.structureType == STRUCTURE_CONTROLLER) {
      return false;
    } else {

      switch (creep.build(creep.target)) {
        case OK:
          //console.log('actionBuild : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : build : OK : Building : ' + creep.target + ' : Creep Energy : ' + _.sum(creep.carry));
          creep.buildType = creep.target.structureType;
          break;
        case ERR_NOT_OWNER:
          //console.log('actionBuild : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : build : ERR_NOT_OWNER');
          break;
        case ERR_BUSY:
          //console.log('actionBuild : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : build : ERR_BUSY');
          break;
        case ERR_NOT_FOUND:
          //console.log('actionBuild : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : build : ERR_NOT_FOUND');
          break;
        case ERR_NOT_ENOUGH_RESOURCES:
          //console.log('actionBuild : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : build : ERR_NOT_ENOUGH_RESOURCES');
          creep.memory.action = 'idle';
          break;
        case ERR_INVALID_TARGET:
          //console.log('actionBuild : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : build : ERR_INVALID_TARGET : targetType : ' + creep.buildType);
          creep.memory.action = 'idle';
          delete creep.memory.target;
          break;
        case ERR_NOT_IN_RANGE:
          creep.moveTo(creep.target);
          //console.log('actionBuild : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : build : ERR_NOT_IN_RANGE : Moving to : ' + creep.target);
          break;
        case ERR_NO_BODYPART:
          //console.log('actionBuild : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : build : ERR_NO_BODYPART');
          break;

      }

      return true;
    }


  }
};
module.exports = actionBuild;
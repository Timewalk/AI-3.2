/*jshint esversion: 6 */
var actionRepair = {
  run: function(creep) {
    try {
      creep.say('🔧');
    } catch (err) {}
    let startCPU = Game.cpu.getUsed();

    if (!creep.target ||
      creep.target.hits >= creep.target.hitsMax ||
      creep.target.structureType == STRUCTURE_WALL ||
      creep.target.structureType == STRUCTURE_RAMPART) {

      const structures = creep.room.find(FIND_STRUCTURES, {
        filter: object => object.hits < object.hitsMax
      });
      const targets = _.sortBy(structures, r => creep.pos.getRangeTo(r));

      for (let i in targets) {
        let breakLoop = false;
        switch (targets[i].structureType) {
          case STRUCTURE_WALL:
            if (targets[i].hits < 100000) {
              creep.memory.action = 'repair';
              creep.target = targets[i];
              breakLoop = true;
            }
            break;
          case STRUCTURE_RAMPART:
            if (targets[i].hits < 100000) {
              creep.memory.action = 'repair';
              creep.target = targets[i];
              breakLoop = true;
            }
            break;
          default:
            creep.memory.action = 'repair';
            creep.target = targets[i];
            breakLoop = true;
        }

        if (breakLoop) {
          break;
        }
      }
    }


    if (!creep.target) {
      creep.memory.action = 'idle';
      return false;
    } else {
      switch (creep.repair(creep.target)) {
        case OK:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : repair : OK');
          break;
        case ERR_NOT_OWNER:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : repair : ERR_NOT_OWNER');
          break;
        case ERR_BUSY:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : repair : ERR_BUSY');
          break;
        case ERR_NOT_ENOUGH_RESOURCES:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : repair : ERR_NOT_ENOUGH_RESOURCES');
          break;
        case ERR_INVALID_TARGET:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : repair : ERR_INVALID_TARGET');
          break;
        case ERR_NOT_IN_RANGE:
          creep.memory.action = 'idle';
          creep.moveTo(creep.target);
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : repair : ERR_NOT_IN_RANGE');
          break;
        case ERR_NO_BODYPART:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : repair : ERR_NO_BODYPART');
          break;
        default:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : repair : ERR_DEFAULT');
      }

      return true;
    }
  }
};
module.exports = actionRepair;
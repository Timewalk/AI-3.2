/*jshint esversion: 6 */
var actionRangeRepair = {
  run: function(creep) {
    creep.say('🔧');
    let startCPU = Game.cpu.getUsed();
    creep.memory.action = 'rangeRepair';
    if (creep.room.name != creep.memory.targetRoom) {
      creep.memory.action = 'idle';
      return false;
    } else {
      if (!creep.target ||
        creep.target.hits >= creep.target.hitsMax) {
        delete creep.memory.target;
        const structures = creep.room.find(FIND_STRUCTURES, {
          filter: object => object.hits < object.hitsMax
        });
        const targets = _.sortBy(structures, r => creep.pos.getRangeTo(r));
        for (let i in targets) {
          if (targets[i].structureType == STRUCTURE_ROAD) {
            creep.target = targets[i];
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
  }
};
module.exports = actionRangeRepair;
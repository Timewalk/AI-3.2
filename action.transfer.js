/*jshint esversion: 6 */

var actionTransfer = {
  run: function(creep) {
    creep.say('⚡');
    let startCPU = Game.cpu.getUsed();


    switch (creep.memory.type) {
      case 'hauler':
        const workerCreep = _.filter(Game.creeps, (creep) =>
          creep.memory.type == 'worker' &&
          creep.memory.targetRoom == creep.room.name);

        if (!creep.target && workerCreep.length < 1 &&
          creep.room.STRUCTURE_SPAWN[0].energy < creep.room.STRUCTURE_SPAWN[0].energyCapacity) {
          creep.target = creep.room.STRUCTURE_SPAWN[0];
        }

        if (!creep.target && workerCreep.length < 1 &&
          creep.room.STRUCTURE_EXTENSION.length > 0) {
          let _extensions = _.sortBy(creep.room.STRUCTURE_EXTENSION, r => creep.pos.getRangeTo(r));
          for (let i in _extensions) {
            if (_extensions[i].energy < _extensions[i].energyCapacity) {
              creep.memory.action = 'transfer';
              creep.target = _extensions[i];
              break;
            }
          }
        }

        if (!creep.target && creep.room.STRUCTURE_TOWER.length > 0) {
          for (let i in creep.room.STRUCTURE_TOWER) {
            if (creep.room.STRUCTURE_TOWER[i].energy < creep.room.STRUCTURE_TOWER[i].energyCapacity * 0.75) {
              creep.target = creep.room.STRUCTURE_TOWER[i];
              creep.memory.action = 'transfer';
              break;
            }
          }
        }
        if (!creep.target && creep.room.STRUCTURE_STORAGE.length > 0) {
          for (let i in creep.room.STRUCTURE_STORAGE) {
            if (creep.room.STRUCTURE_STORAGE[i].store[RESOURCE_ENERGY] < creep.room.STRUCTURE_STORAGE[i].storeCapacity) {
              creep.target = creep.room.STRUCTURE_STORAGE[i];
              creep.memory.action = 'transfer';
              break;
            }
          }
        }
        break;
      case 'worker':
        if (!creep.target &&
          creep.room.STRUCTURE_SPAWN[0].energy < creep.room.STRUCTURE_SPAWN[0].energyCapacity) {
          creep.target = creep.room.STRUCTURE_SPAWN[0];
        }

        if (!creep.target &&
          creep.room.STRUCTURE_EXTENSION.length > 0) {
          let _extensions = _.sortBy(creep.room.STRUCTURE_EXTENSION, r => creep.pos.getRangeTo(r));
          for (let i in _extensions) {
            if (_extensions[i].energy < _extensions[i].energyCapacity) {
              creep.memory.action = 'transfer';
              creep.target = _extensions[i];
              break;
            }
          }
        }

        if (!creep.target && creep.room.STRUCTURE_TOWER.length > 0) {
          for (let i in creep.room.STRUCTURE_TOWER) {
            if (creep.room.STRUCTURE_TOWER[i].energy < creep.room.STRUCTURE_TOWER[i].energyCapacity * 0.75) {
              creep.target = creep.room.STRUCTURE_TOWER[i];
              creep.memory.action = 'transfer';
              break;
            }
          }
        }

        break;
      default:
        if (!creep.target &&
          creep.room.STRUCTURE_EXTENSION.length > 0) {
          let _extensions = _.sortBy(creep.room.STRUCTURE_EXTENSION, r => creep.pos.getRangeTo(r));
          for (let i in _extensions) {
            if (_extensions[i].energy < _extensions[i].energyCapacity) {
              creep.memory.action = 'transfer';
              creep.target = _extensions[i];
              break;
            }
          }
        }

        if (!creep.target &&
          creep.room.STRUCTURE_SPAWN[0].energy < creep.room.STRUCTURE_SPAWN[0].energyCapacity) {
          creep.target = creep.room.STRUCTURE_SPAWN[0];
        }


        if (!creep.target && creep.room.STRUCTURE_TOWER.length > 0) {
          for (let i in creep.room.STRUCTURE_TOWER) {
            if (creep.room.STRUCTURE_TOWER[i].energy < creep.room.STRUCTURE_TOWER[i].energyCapacity * 0.75) {
              creep.target = creep.room.STRUCTURE_TOWER[i];
              creep.memory.action = 'transfer';
              break;
            }
          }
        }

        if (!creep.target && creep.room.STRUCTURE_STORAGE.length > 0) {
          for (let i in creep.room.STRUCTURE_STORAGE) {
            if (creep.room.STRUCTURE_STORAGE[i].store[RESOURCE_ENERGY] < creep.room.STRUCTURE_STORAGE[i].storeCapacity) {
              creep.target = creep.room.STRUCTURE_STORAGE[i];
              creep.memory.action = 'transfer';
              break;
            }
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
        creep.memory.action = 'idle';
        delete creep.memory.target;
        //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : ERR_NOT_IN_RANGE : Moving to : ' + creep.target);
        break;
      case ERR_NO_BODYPART:
        //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : ERR_NO_BODYPART');
        break;
      default:
        //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : transfer : ERR_DEFAULT : ' + creep.target + ' : ' + resource);
        creep.memory.action = 'idle';
        delete creep.memory.target;
        break;
    }

    return true;
  }
};
module.exports = actionTransfer;
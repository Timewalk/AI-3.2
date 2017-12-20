/*jshint esversion: 6 */
// console.log(Game.time + ' : actionWithdraw : ' + creep);

var actionWithdraw = {
  run: function(creep) {
    creep.say('🔋');
    let startCPU = Game.cpu.getUsed();


    if (!creep.target && creep.memory.type != 'hauler' && creep.room.STRUCTURE_STORAGE.length > 0) {
      if (creep.room.STRUCTURE_STORAGE[0].store[RESOURCE_ENERGY] > 2000) {
        creep.memory.action = 'withdraw';
        creep.target = creep.room.STRUCTURE_STORAGE[0];
      }
    }

    if (!creep.target) {
      const containers = creep.room.find(FIND_STRUCTURES, {
        filter: object => object.structureType == STRUCTURE_CONTAINER
      });
      if (containers.length > 0) {
        let _energy = 0;
        for (var i in containers) {
          if (_.sum(containers[i].store) >= creep.carryCapacity * 0.5 &&
            _.sum(containers[i].store) > _energy) {
            _energy = _.sum(containers[i].store);
            creep.target = containers[i];
            creep.memory.action = 'withdraw';
          }
        }
      }
    }

    if (!creep.target) {
      creep.memory.action = 'idle';
      return false;
    } else {

      let resource = RESOURCE_ENERGY;

      switch (creep.withdraw(creep.target, resource)) {
        case OK:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : withdraw : OK');
          creep.memory.action = 'idle';
          delete creep.memory.target;
          break;
        case ERR_NOT_OWNER:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : withdraw : ERR_NOT_OWNER');
          break;
        case ERR_BUSY:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : withdraw : ERR_BUSY');
          break;
        case ERR_NOT_FOUND:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : withdraw : ERR_NOT_FOUND');
          break;
        case ERR_NOT_ENOUGH_RESOURCES:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : withdraw : ERR_NOT_ENOUGH_RESOURCES');
          creep.memory.action = 'idle';
          break;
        case ERR_INVALID_TARGET:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : withdraw : ERR_INVALID_TARGET : ' + creep.target);
          creep.memory.action = 'idle';
          delete creep.memory.target;
          break;
        case ERR_NOT_IN_RANGE:
          creep.moveTo(creep.target);
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : withdraw : ERR_NOT_IN_RANGE : Moving to : ' + creep.target);
          break;
        case ERR_NO_BODYPART:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : withdraw : ERR_NO_BODYPART');
          break;
        default:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : withdraw : ERR_DEFAULT : ' + creep.target + ' : ' + resource);
          creep.memory.action = 'idle';
          delete creep.memory.target;
          break;
      }
      return true;
    }
  }
};
module.exports = actionWithdraw;
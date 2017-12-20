/*jshint esversion: 6 */
//console.log(Game.time + ' : ' + 'actionUpgradeController : ' + creep);

var actionUpgradeController = {
  run: function(creep) {
    creep.say('⚙️');
    let startCPU = Game.cpu.getUsed();
    if (!creep.target) {
      for (var i in Memory.rooms) {
        let controller = Game.getObjectById(Memory.rooms[i].STRUCTURE_CONTROLLER);
        if (controller) {
          if (controller.my) {
            creep.target = controller;
            creep.memory.action = 'upgradeController';
          }
        }
      }
    }

    if (!creep.target) {
      return false;
    } else {

      switch (creep.upgradeController(creep.target)) {
        case OK:
          if (creep.memory.type == 'worker') {
            creep.memory.action = 'idle';
            delete creep.memory.target;
          }
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : upgradeController : OK');
          break;
        case ERR_NOT_OWNER:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : upgradeController : ERR_NOT_OWNER');
          break;
        case ERR_BUSY:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : upgradeController : ERR_BUSY');
          break;
        case ERR_NOT_ENOUGH_RESOURCES:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : upgradeController : ERR_NOT_ENOUGH_RESOURCES');
          creep.memory.action = 'idle';
          delete creep.memory.target;
          break;
        case ERR_INVALID_TARGET:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : upgradeController : ERR_INVALID_TARGET');
          creep.memory.action = 'idle';
          break;
        case ERR_NOT_IN_RANGE:
          creep.moveTo(creep.target);
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : upgradeController : ERR_NOT_IN_RANGE');
          break;
        case ERR_NO_BODYPART:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : upgradeController : ERR_NO_BODYPART');
          break;
      }
    }
    return true;
  }
};

module.exports = actionUpgradeController;
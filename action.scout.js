/*jshint esversion: 6 */
var actionTemplate = {
  run: function(creep) {
    creep.say('👁️');

    let startCPU = Game.cpu.getUsed();

    if (creep.room.name == creep.memory.targetRoom) {
      if (creep.pos.y <= 0) {
        creep.moveTo(creep.pos.x, creep.pos.y + 1);
      } else if (creep.pos.y >= 49) {
        creep.moveTo(creep.pos.x, creep.pos.y - 1);
      } else if (creep.pos.x <= 0) {
        creep.moveTo(creep.pos.x + 1, creep.pos.y);
      } else if (creep.pos.x >= 49) {
        creep.moveTo(creep.pos.x - 1, creep.pos.y);
      }
      creep.memory.action = 'idle';
      return false;
    } else {
      let exit = creep.room.findExitTo(creep.memory.targetRoom);
      let target = creep.pos.findClosestByPath(exit);
      creep.memory.action = 'scout';

      switch (creep.moveTo(target.x, target.y)) {
        case OK:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : ScoutTo : OK');
          break;
        case ERR_NOT_OWNER:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : ScoutTo : ERR_NOT_OWNER');
          break;
        case ERR_BUSY:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : ScoutTo : ERR_BUSY');
          break;
        case ERR_NO_PATH:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : ScoutTo : ERR_NO_PATH');
          break;
        case ERR_INVALID_TARGET:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : ScoutTo : ERR_INVALID_TARGET');
          break;
        case ERR_TIRED:
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : ScoutTo : ERR_TIRED');
          break;
        case ERR_NO_BODYPART:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : ScoutTo : ERR_NO_BODYPART');
          break;
        default:
          creep.memory.action = 'idle';
          delete creep.memory.target;
          //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : ScoutTo : ERR_DEFAULT');
      }

      return true;
    }
  }

};
module.exports = actionTemplate;
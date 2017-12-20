/*jshint esversion: 6 */
var actionHarvest = {
  run: function(creep) {
    creep.say('⛏️');
    let startCPU = Game.cpu.getUsed();


    if (!creep.target) {
      let sortedSource = _.sortBy(creep.room.SOURCE, r => creep.pos.getRangeTo(r));
      for (var i in sortedSource) {
        let source = sortedSource[i];
        if (creep.room.HARVESTSPOT[source.id] < 1) {
          creep.room.HARVESTSPOT[source.id]++;
          creep.target = source;
          creep.memory.action = 'harvest';
          break;
        }
      }
    } else {

      switch (creep.harvest(creep.target)) {
        case OK:
          //console.log(actionHarvest : 'Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : harvest : OK : Harvesting : ' + creep.target + ' : Energy : ' + creep.target.energy);
          creep.memory.action = 'harvest';
          if (creep.carryCapped) {
            if (!creep.memory.CONTAINER) {
              creep.memory.CONTAINER = creep.FIND(creep.pos, 1, STRUCTURE_CONTAINER);
            } else {
              let container = Game.getObjectById(creep.memory.CONTAINER);
              creep.transfer(container, RESOURCE_ENERGY);
            }
          }

          break;
        case ERR_NOT_OWNER:
          //console.log('actionHarvest : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : harvest : ERR_NOT_OWNER');
          break;
        case ERR_BUSY:
          //console.log('actionHarvest : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : harvest : ERR_BUSY');
          break;
        case ERR_NOT_FOUND:
          //console.log('actionHarvest : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : harvest : ERR_NOT_FOUND');
          break;
        case ERR_NOT_ENOUGH_RESOURCES:
          //console.log('actionHarvest : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : harvest : ERR_NOT_ENOUGH_RESOURCES');
          break;
        case ERR_INVALID_TARGET:
          //console.log('actionHarvest : Total CPU Used : ' + (Game.cpu.getUsed() - startCPU) + ' : ' + creep + ' : harvest : ERR_INVALID_TARGET : ' + creep.target);
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
module.exports = actionHarvest;
/*jshint esversion: 6 */
var actionRangeHarvest = {
  run: function(creep) {
    creep.say('⛏️');
    let startCPU = Game.cpu.getUsed();
    creep.memory.action = 'rangeHarvest';

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
      if (!creep.target) {
        let sortedSource = _.sortBy(creep.room.SOURCE, r => creep.pos.getRangeTo(r));
        for (var i in sortedSource) {
          let source = sortedSource[i];
          if (creep.room.HARVESTSPOT[source.id] < 1) {
            creep.room.HARVESTSPOT[source.id]++;
            creep.target = source;
            break;
          }
        }
      } else {

        switch (creep.harvest(creep.target)) {
          case OK:
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
            creep.moveTo(creep.target);
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
  }

};
module.exports = actionRangeHarvest;
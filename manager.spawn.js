/*jshint esversion: 6 */
const spawnCreep = require('spawn.creep');
const spawnScout = false;

var managerSpawn = {
  run: function() {
    const startCPU = Game.cpu.getUsed();

    _.forEach(Game.spawns, spawn => {
      if (spawn.spawning) {
        console.log('managerSpawn : SPAWNING : ' + spawn.spawning.name);
      } else if (!spawn.spawning && spawn.room.energyAvailable >= 300) {

        const harvestCreeps = _.filter(Game.creeps, (creep) =>
          creep.memory.type == 'harvester' &&
          creep.memory.targetRoom == spawn.room.name);
        const workerCreeps = _.filter(Game.creeps, (creep) =>
          creep.memory.type == 'worker' &&
          creep.memory.targetRoom == spawn.room.name);
        const fixerCreeps = _.filter(Game.creeps, (creep) =>
          creep.memory.type == 'fixer' &&
          creep.memory.targetRoom == spawn.room.name);
        const haulerCreeps = _.filter(Game.creeps, (creep) =>
          creep.memory.type == 'hauler' &&
          creep.memory.targetRoom == spawn.room.name);
        const levelerCreeps = _.filter(Game.creeps, (creep) =>
          creep.memory.type == 'leveler' &&
          creep.memory.targetRoom == spawn.room.name);
        const scoutCreeps = _.filter(Game.creeps, (creep) =>
          creep.memory.type == 'scout' &&
          creep.memory.targetRoom == spawn.room.name);
        const constructionSites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);


        //console.log(`managerSpawn : constructionSites.length ${constructionSites.length}`);

        if (haulerCreeps.length == 0) {
          spawnCreep.run(spawn, spawn.room.energyAvailable, 'hauler', spawn.room.name);

        } else if (harvestCreeps.length == 0) {
          spawnCreep.run(spawn, spawn.room.energyAvailable, 'harvester', spawn.room.name);

        } else if (workerCreeps.length < 2 &&
          spawn.room.energyAvailable >= spawn.room.energyCapacityAvailable) {
          spawnCreep.run(spawn, spawn.room.energyAvailable, 'worker', spawn.room.name);

        } else if (haulerCreeps.length < 1 &&
          spawn.room.energyAvailable >= spawn.room.energyCapacityAvailable) {
          spawnCreep.run(spawn, spawn.room.energyAvailable, 'hauler', spawn.room.name);

        } else if (harvestCreeps.length < spawn.room.SOURCE.length &&
          spawn.room.energyAvailable >= spawn.room.energyCapacityAvailable) {
          spawnCreep.run(spawn, spawn.room.energyAvailable, 'harvester', spawn.room.name);

        } else if (levelerCreeps.length < spawn.room.STRUCTURE_STORAGE.length &&
          spawn.room.energyAvailable >= spawn.room.energyCapacityAvailable) {
          spawnCreep.run(spawn, spawn.room.energyAvailable, 'leveler', spawn.room.name);

        } else if (fixerCreeps.length < spawn.room.SOURCE.length * 1 &&
          spawn.room.STRUCTURE_TOWER.length < 1 &&
          spawn.room.energyAvailable >= spawn.room.energyCapacityAvailable) {
          spawnCreep.run(spawn, spawn.room.energyAvailable, 'fixer', spawn.room.name);

        } else if (spawnScout) {
          spawnCreep.run(spawn, spawn.room.energyAvailable, 'scout', null);

        } else {
          for (let room in Memory.rooms) {
            const roomMem = Memory.rooms[room];
            if (roomMem.STRUCTURE_SPAWN.length < 1) {
              const rangeHarvestCreeps = _.filter(Game.creeps, (creep) =>
                creep.memory.type == 'rangeHarvester' &&
                creep.memory.targetRoom == room);
              const rangeWorkerCreeps = _.filter(Game.creeps, (creep) =>
                creep.memory.type == 'rangeWorker' &&
                creep.memory.targetRoom == room);
              const rangeReserverCreeps = _.filter(Game.creeps, (creep) =>
                creep.memory.type == 'rangeReserver' &&
                creep.memory.targetRoom == room);

              if (rangeHarvestCreeps.length < roomMem.SOURCE.length &&
                spawn.room.energyAvailable >= spawn.room.energyCapacityAvailable) {
                spawnCreep.run(spawn, spawn.room.energyAvailable, 'rangeHarvester', room);

              } else if (rangeWorkerCreeps.length < rangeHarvestCreeps.length &&
                spawn.room.energyAvailable >= spawn.room.energyCapacityAvailable) {
                spawnCreep.run(spawn, spawn.room.energyAvailable, 'rangeWorker', room);

              } else if (rangeReserverCreeps.length < 1 &&
                spawn.room.energyAvailable >= spawn.room.energyCapacityAvailable) {
                console.log(`SPAWN rangeReserverCreep `);
                spawnCreep.run(spawn, spawn.room.energyAvailable, 'rangeReserver', room);
              }

            }
          }
        }
      }
    });


    //console.log('MANAGER SPAWN CPU Used : ' + (Game.cpu.getUsed() - startCPU));
  }
};

module.exports = managerSpawn;
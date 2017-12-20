/*jshint esversion: 6 */
const spawnCreep = require('spawn.creep');
//Spawn time	3 ticks per each body part

var managerCreep = {
  run: function() {
    let startCPU = Game.cpu.getUsed();

    // Clear out dead creeps
    for (var creep in Memory.creeps) {
      if (!Game.creeps[creep]) {
        if (Memory.creeps[creep]._move) {
          let room = Memory.creeps[creep]._move.room;
          let sourceId = Memory.creeps[creep].target;
          Memory.rooms[room].HARVESTSPOT[sourceId] = 0;
        }
        delete Memory.creeps[creep];
        console.log('managerCreep : Cleared: DEAD CREEP = ' + creep);
      }
    }

    _.forEach(Game.creeps, creep => {
      const spawn = Game.getObjectById(Memory.rooms[creep.memory.home].STRUCTURE_SPAWN[0]);
      console.log(`managerCreep : ${creep} : Body SpawnTime : ${creep.body.length * 3}`);
      console.log(`managerCreep : ${creep} : Ticks to live : ${creep.ticksToLive}
        `);
      //console.log(`managerCreep : ${creep} : Spawn : ${spawn}`);
      //console.log(`managerCreep : ${creep} : Spawning : ${spawn.spawning}`);
      //console.log(`managerCreep : ${creep} : spawn.room.energyAvailable ${spawn.room.energyAvailable}`);
      //console.log(`managerCreep : ${creep} : spawn.room.energyCapacityAvailable ${spawn.room.energyCapacityAvailable}`);
      //console.log(`managerCreep : ${creep} : spawn ${spawn}`);
      //console.log(`managerCreep : ${creep} : spawn.room.energyAvailable ${spawn.room.energyAvailable}`);
      //console.log(`managerCreep : ${creep} : creep.memory.type ${creep.memory.type}`);
      //console.log(`managerCreep : ${creep} : creep.memory.targetRoom ${creep.memory.targetRoom}`);

      if (!spawn.spawning &&
        creep.ticksToLive <= (creep.body.length * 3) &&
        spawn.room.energyAvailable >= spawn.room.energyCapacityAvailable) {
        console.log(`managerCreep : ${creep} : Needs To Respawn`);
        spawnCreep.run(spawn, spawn.room.energyAvailable, creep.memory.type, creep.memory.targetRoom);
      }


      if (creep.hits < creep.hitsMax && creep.room.STRUCTURE_TOWER.length > 0) {
        creep.room.STRUCTURE_TOWER[0].heal(creep);
      }

      switch (creep.memory.action) {
        case 'spawning':
          var actionSpawning = require('action.spawning');
          actionSpawning.run(creep);
          break;
        case 'idle':
          switch (creep.memory.type) {
            case 'harvester':
              var harvesterIdle = require('idle.harvester');
              harvesterIdle.run(creep);
              break;
            case 'worker':
              var workerIdle = require('idle.worker');
              workerIdle.run(creep);
              break;
            case 'fixer':
              var fixerIdle = require('idle.fixer');
              fixerIdle.run(creep);
              break;
            case 'hauler':
              var haulerIdle = require('idle.hauler');
              haulerIdle.run(creep);
              break;
            case 'spawnHauler':
              var spawnHaulerIdle = require('idle.spawnHauler');
              spawnHaulerIdle.run(creep);
              break;
            case 'leveler':
              var levelerIdle = require('idle.leveler');
              levelerIdle.run(creep);
              break;
            case 'scout':
              var scoutIdle = require('idle.scout');
              scoutIdle.run(creep);
              break;
            case 'rangeHarvester':
              var rangeHarvesterIdle = require('idle.rangeHarvester');
              rangeHarvesterIdle.run(creep);
              break;
            case 'rangeWorker':
              var rangeWorkerIdle = require('idle.rangeWorker');
              rangeWorkerIdle.run(creep);
              break;
            case 'rangeReserver':
              var rangeReserverIdle = require('idle.rangeReserver');
              rangeReserverIdle.run(creep);
              break;
            default:
          }
          break;
        case 'harvest':
          var actionHarvest = require('action.harvest');
          actionHarvest.run(creep);
          break;
        case 'transfer':
          var actionTransfer = require('action.transfer');
          actionTransfer.run(creep);
          break;
        case 'getLife':
          var actionGetLife = require('action.getLife');
          actionGetLife.run(creep);
          break;
        case 'build':
          var actionBuild = require('action.build');
          actionBuild.run(creep);
          break;
        case 'upgradeController':
          var actionUpgrade = require('action.upgradeController');
          actionUpgrade.run(creep);
          break;
        case 'withdraw':
          var actionWithdraw = require('action.withdraw');
          actionWithdraw.run(creep);
          break;
        case 'pickup':
          var actionPickup = require('action.pickup');
          actionPickup.run(creep);
          break;
        case 'repair':
          var actionRepair = require('action.repair');
          actionRepair.run(creep);
          break;
        case 'scout':
          var actionScout = require('action.scout');
          actionScout.run(creep);
          break;
        case 'goHome':
          var actionGoHome = require('action.goHome');
          actionGoHome.run(creep);
          break;
        case 'rangeHarvest':
          var actionRangeHarvest = require('action.rangeHarvest');
          actionRangeHarvest.run(creep);
          break;
        case 'rangeWithdraw':
          var actionRangeWithdraw = require('action.rangeWithdraw');
          actionRangeWithdraw.run(creep);
          break;
        case 'rangeTransfer':
          var actionRangeTransfer = require('action.rangeTransfer');
          actionRangeTransfer.run(creep);
          break;
        case 'rangePickup':
          var actionRangePickup = require('action.rangePickup');
          actionRangePickup.run(creep);
          break;
        case 'rangeRepair':
          var actionRangeRepair = require('action.rangeRepair');
          actionRangeRepair.run(creep);
          break;
        case 'rangeReserveController':
          var actionReserveController = require('action.reserveController');
          actionReserveController.run(creep);
          break;
        case 'actionRangeBuild':
          var actionRangeBuild = require('action.rangeBuild');
          actionRangeBuild.run(creep);
          break;

        default:

      }
    });
    //console.log('MANAGER CREEP CPU Used : ' + (Game.cpu.getUsed() - startCPU));
  }
};
module.exports = managerCreep;
/*jshint esversion: 6 */
var actionRepair = require('action.repair');

var managerCreep = {
  run: function() {
    let startCPU = Game.cpu.getUsed();

    _.forEach(Game.rooms, room => {
      _.forEach(room.STRUCTURE_TOWER, tower => {
        let towerBusy = false;

        if (room.find(FIND_HOSTILE_CREEPS).length > 0) {
          const targets = room.find(FIND_HOSTILE_CREEPS);
          tower.attack(targets[0]);
          towerBusy = true;
        } else if (tower.energy > tower.energyCapacity * 0.7) {
          actionRepair.run(tower);
        }

      });
    });

    //console.log('MANAGER TOWER CPU Used : ' + (Game.cpu.getUsed() - startCPU));
  }
};
module.exports = managerCreep;
/*jshint esversion: 6 */

const prototypes = require('prototypes');
const managerSpawn = require('manager.spawn');
const managerCreep = require('manager.creep');
const managerMemory = require('manager.memory');
const managerTower = require('manager.tower');


module.exports.loop = function() {
  let startCPU = Game.cpu.getUsed();
  console.log(`TICK ${Game.time}`);


  prototypes.run();
  managerMemory.run();
  if (Game.creeps) {
    managerCreep.run();
  }
  managerSpawn.run();
  if (Memory.rooms) {
    managerTower.run();
  }


  //console.log('Total CPU Used : ' + (Game.cpu.getUsed() - startCPU));
};
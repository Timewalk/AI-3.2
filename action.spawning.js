/*jshint esversion: 6 */
var actionSpawning = {
  run: function(creep) {

    if (!creep.spawning) {
      creep.memory.action = 'idle';
    }
  }

};
module.exports = actionSpawning;
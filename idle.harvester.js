/*jshint esversion: 6 */
var actionHarvest = require('action.harvest');
var actionScout = require('action.scout');

var harvesterIdle = {
  run: function(creep) {
    creep.say('💤');

    if (actionHarvest.run(creep));
  }
};
module.exports = harvesterIdle;
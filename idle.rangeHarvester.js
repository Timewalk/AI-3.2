/*jshint esversion: 6 */
var actionRangeHarvest = require('action.rangeHarvest');

var rangeHarvesterIdle = {
  run: function(creep) {
    creep.say('💤');
    if (actionRangeHarvest.run(creep));
  }
};
module.exports = rangeHarvesterIdle;
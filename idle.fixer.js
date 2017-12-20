/*jshint esversion: 6 */
var actionWithdraw = require('action.withdraw');
var actionRepair = require('action.repair');

var fixerIdle = {
  run: function(creep) {

    creep.say('💤');

    switch (_.sum(creep.carry) > 0) {
      case true:
        if (actionRepair.run(creep));
        break;

      case false:
        if (actionWithdraw.run(creep));
        break;
      default:
    }

  }

};
module.exports = fixerIdle;
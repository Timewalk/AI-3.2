/*jshint esversion: 6 */
var actionWithdraw = require('action.withdraw');
var actionUpgradeController = require('action.upgradeController');

var levelerIdle = {
  run: function(creep) {
    creep.say('💤');

    switch (_.sum(creep.carry) > 0) {
      case true:
        if (actionUpgradeController.run(creep));
        break;
      case false:
        if (actionWithdraw.run(creep));
        break;
      default:
    }

  }

};
module.exports = levelerIdle;
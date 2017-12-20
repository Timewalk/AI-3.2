/*jshint esversion: 6 */
const actionWithdraw = require('action.withdraw');
const actionTransfer = require('action.transfer');
const actionPickup = require('action.pickup');
const actionBuild = require('action.build');
const actionUpgradeController = require('action.upgradeController');

var workerIdle = {
  run: function(creep) {
    creep.say('💤');

    switch (_.sum(creep.carry) > 0) {
      case true:
        if (actionTransfer.run(creep));
        else if (actionBuild.run(creep));
        else if (actionUpgradeController.run(creep));
        break;
      case false:
        if (actionWithdraw.run(creep));
        else if (actionPickup.run(creep));
        break;
      default:
    }

  }

};
module.exports = workerIdle;
/*jshint esversion: 6 */
const actionTransfer = require('action.transfer');
const actionWithdraw = require('action.withdraw');
const actoinPickup = require('action.pickup');

var spawnHaulerIdle = {
  run: function(creep) {
    creep.say('💤');
    switch (_.sum(creep.carry) > 0) {
      case true:
        if (actionTransfer.run(creep));
        break;
      case false:
        if (actionWithdraw.run(creep));
        else if (actoinPickup.run(creep));
        break;
      default:
    }
  }

};
module.exports = spawnHaulerIdle;
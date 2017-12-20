/*jshint esversion: 6 */
const actionRangeWithdraw = require('action.rangeWithdraw');
const actionRangeTransfer = require('action.rangeTransfer');
const actionRangePickup = require('action.rangePickup');
const actionRangeRepair = require('action.rangeRepair');
const actionRangeBuild = require('action.rangeBuild');


var rangeWorkerIdle = {
  run: function(creep) {
    creep.say('💤');
    switch (_.sum(creep.carry) > 0) {
      case true:
        if (actionRangeBuild.run(creep));
        else if (actionRangeRepair.run(creep));
        else if (actionRangeTransfer.run(creep));
        break;
      case false:
        if (actionRangeWithdraw.run(creep));
        else if (actionRangePickup.run(creep));
        break;
      default:
    }

  }

};
module.exports = rangeWorkerIdle;
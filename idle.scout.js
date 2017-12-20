/*jshint esversion: 6 */
var actionScout = require('action.scout');


var scoutIdle = {
  run: function(creep) {

    creep.say('💤');

    if (actionScout.run(creep, creep.room.SOUTH)) {

    } else {
      creep.moveTo(creep.room.controller);
    }

  }

};
module.exports = scoutIdle;
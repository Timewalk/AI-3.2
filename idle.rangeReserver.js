/*jshint esversion: 6 */
const actionReserveController = require('action.reserveController');


var rangeReserverIdle = {
  run: function(creep) {
    creep.say('💤');

    actionReserveController.run(creep);


  }

};
module.exports = rangeReserverIdle;
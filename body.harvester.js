/*jshint esversion: 6 */
var bodyHarvester = {
  run: function(_energy) {
    var body = [];
    var energy;

    if (_energy >= 700) {
      energy = 700;
    } else {
      energy = _energy;
    }


    body.push(WORK);
    energy = energy - 100;
    body.push(CARRY);
    energy = energy - 50;
    body.push(MOVE);
    energy = energy - 50;


    while (energy >= 250) {
      body.push(WORK);
      energy = energy - 100;
      body.push(WORK);
      energy = energy - 100;
      body.push(MOVE);
      energy = energy - 50;
    }

    return body;
  }
};
module.exports = bodyHarvester;
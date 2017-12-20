/*jshint esversion: 6 */
var bodyHauler = {
  run: function(_energy) {
    var body = [];
    var energy;

    if (_energy >= 1500) {
      energy = 1500;
    } else {
      energy = _energy;
    }

    while (energy >= 150) {
      body.push(CARRY);
      energy = energy - 50;
      body.push(CARRY);
      energy = energy - 50;
      body.push(MOVE);
      energy = energy - 50;
    }

    return body;
  }
};
module.exports = bodyHauler;
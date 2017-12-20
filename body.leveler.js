/*jshint esversion: 6 */
var bodyLeveler = {
  run: function(_energy) {
    var body = [];
    var energy;

    if (_energy >= 1300) {
      energy = 1300;
    } else {
      energy = _energy;
    }

    body.push(CARRY);
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
module.exports = bodyLeveler;
/*jshint esversion: 6 */
var bodyScout = {
  run: function(_energy) {
    var body = [];
    var energy;

    if (_energy >= 50) {
      energy = 50;
    } else {
      energy = _energy;
    }

    while (energy >= 50) {
      body.push(MOVE);
      energy = energy - 50;
    }
    return body;
  }
};
module.exports = bodyScout;
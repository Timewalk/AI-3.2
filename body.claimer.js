/*jshint esversion: 6 */
var bodyFixer = {
  run: function(_energy) {
    var body = [];
    var energy;

    if (_energy >= 1300) {
      energy = 1300;
    } else {
      energy = _energy;
    }

    while (energy >= 650) {
      body.push(CLAIM);
      energy = energy - 600;
      body.push(MOVE);
      energy = energy - 50;
    }
    return body;
  }
};
module.exports = bodyFixer;
/*jshint esversion: 6 */
var bodyFixer = {
  run: function(_energy) {
    var body = [];
    var energy;

    if (_energy >= 2000) {
      energy = 2000;
    } else {
      energy = _energy;
    }

    body.push(WORK);
    energy = energy - 100;
    body.push(CARRY);
    energy = energy - 50;
    body.push(MOVE);
    energy = energy - 50;



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
module.exports = bodyFixer;
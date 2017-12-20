/*jshint esversion: 6 */
const bodyHarvester = require('body.harvester');
const bodyWorker = require('body.worker');
const bodyfixer = require('body.fixer');
const bodyHauler = require('body.hauler');
const bodyLeveler = require('body.leveler');
const bodyScout = require('body.scout');
const bodySpawnHauler = require('body.spawnHauler');
const bodyClaimer = require('body.claimer');

var spawnCreep = {
  run: function(_spawn, _energy, _type, _room) {
    if (!Memory.creepNameCounter) {
      Memory.creepNameCounter = 0;
    }
    Memory.creepNameCounter++;
    var body;
    var name = _type + '_' + Memory.creepNameCounter;
    var memory = {
      memory: {
        type: _type,
        action: 'spawning',
        home: _spawn.room.name,
        targetRoom: _room,
      }
    };

    switch (_type) {
      case 'harvester':
        body = bodyHarvester.run(_energy);
        break;
      case 'worker':
        body = bodyWorker.run(_energy);
        break;
      case 'fixer':
        body = bodyfixer.run(_energy);
        break;
      case 'hauler':
        body = bodyHauler.run(_energy);
        break;
      case 'spawnHauler':
        body = bodySpawnHauler.run(_energy);
        break;
      case 'leveler':
        body = bodyLeveler.run(_energy);
        break;
      case 'scout':
        body = bodyScout.run(_energy);
        break;
      case 'rangeHarvester':
        body = bodyHarvester.run(_energy);
        break;
      case 'rangeWorker':
        body = bodyWorker.run(_energy);
        break;
      case 'rangeReserver':
        body = bodyClaimer.run(_energy);
        break;
      default:

    }
    return _spawn.spawnCreep(body, name, memory);
  }
};

module.exports = spawnCreep;
/*jshint esversion: 6 */
var actionGetLife = {
  run: function(creep) {

    if (!creep.target) {
      creep.target = creep.room.STRUCTURE_SPAWN[0];
    }

    var spawn = creep.room.STRUCTURE_SPAWN[0];
    switch (spawn.renewCreep(creep)) {
      case OK:
        //console.log(actionGetLife : creep + ' : renewCreep : OK');
        break;
      case ERR_NOT_OWNER:
        //console.log(actionGetLife : creep + ' : renewCreep : ERR_NOT_OWNER');
        break;
      case ERR_BUSY:
        //console.log(actionGetLife : creep + ' : renewCreep : ERR_BUSY');
        break;
      case ERR_NOT_ENOUGH_ENERGY:
        //console.log(actionGetLife : creep + ' : renewCreep : ERR_NOT_ENOUGH_RESOURCES');
        break;
      case ERR_INVALID_TARGET:
        //console.log(actionGetLife : creep + ' : renewCreep : ERR_INVALID_TARGET : ' + creep.target);
        break;
      case ERR_FULL:
        //console.log(actionGetLife : creep + ' : renewCreep : ERR_FULL : ' + creep.target);
        creep.memory.action = 'idle';
        delete creep.memory.target;
        break;
      case ERR_NOT_IN_RANGE:
        //console.log(actionGetLife : creep + ' : renewCreep : ERR_NOT_IN_RANGE : Moving to : ' + creep.target);
        creep.moveTo(creep.target);
        break;
      case ERR_NO_BODYPART:
        //console.log(actionGetLife : creep + ' : renewCreep : ERR_NO_BODYPART');
        break;
      default:
        //console.log(actionGetLife : creep + ' : renewCreep : ERR_DEFAULT : ' + creep.target);
        creep.memory.action = 'idle';
        delete creep.memory.target;
        break;
    }

  }

};
module.exports = actionGetLife;
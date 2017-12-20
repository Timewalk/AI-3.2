/*jshint esversion: 6 */



Object.defineProperty(Creep.prototype, 'path', {
  get: function() {

    if (!this.memory.path) {
      let target = Game.getObjectById(this.memory.target);
      this.memory.path = this.room.findPath(this.pos, target.pos);
      console.log(this + ' GENERATED NEW PATH');
    }
    return this.memory.path;

  },
  set: function(value) {
    this.memory.path = null;
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Creep.prototype, 'buildType', {
  get: function() {
    if (!this._buildType) {
      if (!this.memory.buildType) {
        this.memory.buildType = null;
      }
      this._buildType = this.memory.buildType;
    }
    return this._buildType;
  },
  set: function(value) {
    this.memory.buildType = value;
    this._buildType = value;
  },
  enumerable: false,
  configurable: true
});


Object.defineProperty(Creep.prototype, 'target', {
  get: function() {
    if (!this._target) {
      this._target = this.memory.target;
    }
    return Game.getObjectById(this._target);
  },
  set: function(value) {
    this._target = value.id;
    this.memory.target = value.id;
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(StructureTower.prototype, 'target', {
  get: function() {
    if (!this.memory) {
      this.memory = {};
    }

    if (!this._target) {
      if (!this.memory.target) {
        this.memory.target = null;
      }
      this._target = this.memory.target;
    }
    return Game.getObjectById(this._target);
  },
  set: function(value) {
    this._target = value.id;
    this.memory.target = value.id;
  },
  enumerable: false,
  configurable: true
});


Object.defineProperty(Room.prototype, 'totalHarvestSpots', {
  get: function() {
    if (!this._totalHarvestSpots) {
      if (!this.memory.totalHarvestSpots) {
        //let _this = this;
        let totalHarvestSpots = 0;
        _.forEach(this.find(FIND_SOURCES), source => {
          let harvestSpot = 0;
          let area = this.lookAtArea(source.pos.y - 1,
            source.pos.x - 1,
            source.pos.y + 1,
            source.pos.x + 1,
            true);
          _.forEach(area, square => {
            if (square.terrain != 'wall' && square.terrain != undefined) {
              harvestSpot++;
              totalHarvestSpots++;
            }
          });
          this.memory[source.id] = [harvestSpot, 0];
        });
        this.memory.totalHarvestSpots = totalHarvestSpots;
      }
      this.__totalHarvestSpots = this.memory.totalHarvestSpots;
    }
    return this.__totalHarvestSpots;
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Creep.prototype, 'carryCapped', {
  get: function() {
    if (!this._carryCapped) {
      this._carryCapped = _.sum(this.carry) >= this.carryCapacity;
    }
    return this._carryCapped;
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'energyCapped', {
  get: function() {
    if (!this._energyCapped) {
      this._energyCapped = (this.energyAvailable >= this.energyCapacityAvailable);
    }
    return this._energyCapped;
  },
  enumerable: false,
  configurable: true

});

Object.defineProperty(Room.prototype, 'creepCount', {
  get: function() {
    if (!this._creepCount) {
      this._creepCount = this.find(FIND_MY_CREEPS).length;
    }
    return this._creepCount;
  },
  enumerable: false,
  configurable: true
});

var prototypes = {
  run: function() {
    let startCPU = Game.cpu.getUsed();

    if (!Room.prototype.FIND_DROPPED_RESOURCES) {
      Room.prototype.FIND_DROPPED_RESOURCES = function() {
        if (!Room._droppedResources) {
          Room._droppedResources = this.find(FIND_DROPPED_RESOURCES);
        }
        return Room._droppedResources;
      };
    }


    if (!Creep.prototype.FIND_CLOSEST_CONSTRUCTION_SITE) {
      Creep.prototype.FIND_CLOSEST_CONSTRUCTION_SITE = function() {
        if (!Creep._constructionSites) {
          Creep._constructionSites = this.room.find(FIND_CONSTRUCTION_SITES);
        }
        let value = _.sortBy(Creep._constructionSites, r => this.pos.getRangeTo(r));
        return value;
      };
    }

    if (!Creep.prototype.FIND) {
      Creep.prototype.FIND = function(_focus, _range, _objType) {
        var value;
        let area = this.room.lookAtArea(
          _focus.y - _range,
          _focus.x - _range,
          _focus.y + _range,
          _focus.x + _range,
          true
        );
        _.forEach(area, square => {
          if (square.structure) {
            if (square.structure.structureType == _objType) {
              value = square.structure.id;
              //console.log(value);
            }
          }
        });
        return value;
      };
    }

    //console.log('PROTOTYPES CPU Used : ' + (Game.cpu.getUsed() - startCPU));
  }
};


module.exports = prototypes;
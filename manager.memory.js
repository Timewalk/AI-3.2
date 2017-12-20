/*jshint esversion: 6 */
Object.defineProperty(Room.prototype, 'UPDATES', {
  get: function() {
    if (!this._UPDATES) {
      if (!this.memory.UPDATES) {
        let UPDATES = {
          source: true,
          extension: true,
          spawn: true,
          road: true,
          constructedWall: true,
          rampart: true,
          keeperLair: true,
          portal: true,
          controller: true,
          link: true,
          storage: true,
          tower: true,
          observer: true,
          powerBank: true,
          powerSpawn: true,
          extractor: true,
          lab: true,
          terminal: true,
          container: true,
          nuker: true,
          harvestSpot: true
        };
        this.memory.UPDATES = UPDATES;
      }
      this._UPDATES = this.memory.UPDATES;
    }
    return this._UPDATES;
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_EXTENSION', {
  get: function() {
    if (!this._STRUCTURE_EXTENSION) {
      if (!this.memory.STRUCTURE_EXTENSION) {
        this.memory.STRUCTURE_EXTENSION = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_EXTENSION
          }
        }).map(extensions => extensions.id);
      }
      this._STRUCTURE_EXTENSION = this.memory.STRUCTURE_EXTENSION.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_EXTENSION;
  },
  set: function(value) {
    this.memory.STRUCTURE_EXTENSION = value;
    this._STRUCTURE_EXTENSION = this.memory.STRUCTURE_EXTENSION.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_SPAWN', {
  get: function() {
    if (!this._STRUCTURE_SPAWN) {
      if (!this.memory.STRUCTURE_SPAWN) {
        this.memory.STRUCTURE_SPAWN = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_SPAWN
          }
        }).map(STRUCTURE_SPAWN => STRUCTURE_SPAWN.id);
      }
      this._STRUCTURE_SPAWN = this.memory.STRUCTURE_SPAWN.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_SPAWN;
  },
  set: function(value) {
    this.memory.STRUCTURE_SPAWN = value;
    this._STRUCTURE_SPAWN = this.memory.STRUCTURE_SPAWN.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_ROAD', {
  get: function() {
    if (!this._STRUCTURE_ROAD) {
      if (!this.memory.STRUCTURE_ROAD) {
        this.memory.STRUCTURE_ROAD = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_ROAD
          }
        }).map(STRUCTURE_ROAD => STRUCTURE_ROAD.id);
      }
      this._STRUCTURE_ROAD = this.memory.STRUCTURE_ROAD.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_ROAD;
  },
  set: function(value) {
    this.memory.STRUCTURE_ROAD = value;
    this._STRUCTURE_ROAD = this.memory.STRUCTURE_ROAD.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_WALL', {
  get: function() {
    if (!this._STRUCTURE_WALL) {
      if (!this.memory.STRUCTURE_WALL) {
        this.memory.STRUCTURE_WALL = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_WALL
          }
        }).map(STRUCTURE_WALL => STRUCTURE_WALL.id);
      }
      this._STRUCTURE_WALL = this.memory.STRUCTURE_WALL.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_WALL;
  },
  set: function(value) {
    this.memory.STRUCTURE_WALL = value;
    this._STRUCTURE_WALL = this.memory.STRUCTURE_WALL.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_RAMPART', {
  get: function() {
    if (!this._STRUCTURE_RAMPART) {
      if (!this.memory.STRUCTURE_RAMPART) {
        this.memory.STRUCTURE_RAMPART = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_RAMPART
          }
        }).map(STRUCTURE_RAMPART => STRUCTURE_RAMPART.id);
      }
      this._STRUCTURE_RAMPART = this.memory.STRUCTURE_RAMPART.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_RAMPART;
  },
  set: function(value) {
    this.memory.STRUCTURE_RAMPART = value;
    this._STRUCTURE_RAMPART = this.memory.STRUCTURE_RAMPART.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_KEEPER_LAIR', {
  get: function() {
    if (!this._STRUCTURE_KEEPER_LAIR) {
      if (!this.memory.STRUCTURE_KEEPER_LAIR) {
        this.memory.STRUCTURE_KEEPER_LAIR = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_KEEPER_LAIR
          }
        }).map(STRUCTURE_KEEPER_LAIR => STRUCTURE_KEEPER_LAIR.id);
      }
      this._STRUCTURE_KEEPER_LAIR = this.memory.STRUCTURE_KEEPER_LAIR.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_KEEPER_LAIR;
  },
  set: function(value) {
    this.memory.STRUCTURE_KEEPER_LAIR = value;
    this._STRUCTURE_KEEPER_LAIR = this.memory.STRUCTURE_KEEPER_LAIR.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_PORTAL', {
  get: function() {
    if (!this._STRUCTURE_PORTAL) {
      if (!this.memory.STRUCTURE_PORTAL) {
        this.memory.STRUCTURE_PORTAL = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_PORTAL
          }
        }).map(STRUCTURE_PORTAL => STRUCTURE_PORTAL.id);
      }
      this._STRUCTURE_PORTAL = this.memory.STRUCTURE_PORTAL.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_PORTAL;
  },
  set: function(value) {
    this.memory.STRUCTURE_PORTAL = value;
    this._STRUCTURE_PORTAL = this.memory.STRUCTURE_PORTAL.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_CONTROLLER', {
  get: function() {
    if (!this._STRUCTURE_CONTROLLER) {
      if (!this.memory.STRUCTURE_CONTROLLER) {
        this.memory.STRUCTURE_CONTROLLER = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_CONTROLLER
          }
        }).map(STRUCTURE_CONTROLLER => STRUCTURE_CONTROLLER.id);
      }
      this._STRUCTURE_CONTROLLER = this.memory.STRUCTURE_CONTROLLER.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_CONTROLLER;
  },
  set: function(value) {
    this.memory.STRUCTURE_CONTROLLER = value;
    this._STRUCTURE_CONTROLLER = this.memory.STRUCTURE_CONTROLLER.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_LINK', {
  get: function() {
    if (!this._STRUCTURE_LINK) {
      if (!this.memory.STRUCTURE_LINK) {
        this.memory.STRUCTURE_LINK = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_LINK
          }
        }).map(STRUCTURE_LINK => STRUCTURE_LINK.id);
      }
      this._STRUCTURE_LINK = this.memory.STRUCTURE_LINK.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_LINK;
  },
  set: function(value) {
    this.memory.STRUCTURE_LINK = value;
    this._STRUCTURE_LINK = this.memory.STRUCTURE_LINK.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_STORAGE', {
  get: function() {
    if (!this._STRUCTURE_STORAGE) {
      if (!this.memory.STRUCTURE_STORAGE) {
        this.memory.STRUCTURE_STORAGE = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_STORAGE
          }
        }).map(STRUCTURE_STORAGE => STRUCTURE_STORAGE.id);
      }
      this._STRUCTURE_STORAGE = this.memory.STRUCTURE_STORAGE.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_STORAGE;
  },
  set: function(value) {
    this.memory.STRUCTURE_STORAGE = value;
    this._STRUCTURE_STORAGE = this.memory.STRUCTURE_STORAGE.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_TOWER', {
  get: function() {
    if (!this._STRUCTURE_TOWER) {
      if (!this.memory.STRUCTURE_TOWER) {
        this.memory.STRUCTURE_TOWER = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_TOWER
          }
        }).map(STRUCTURE_TOWER => STRUCTURE_TOWER.id);
      }
      this._STRUCTURE_TOWER = this.memory.STRUCTURE_TOWER.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_TOWER;
  },
  set: function(value) {
    this.memory.STRUCTURE_TOWER = value;
    this._STRUCTURE_TOWER = this.memory.STRUCTURE_TOWER.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_OBSERVER', {
  get: function() {
    if (!this._STRUCTURE_OBSERVER) {
      if (!this.memory.STRUCTURE_OBSERVER) {
        this.memory.STRUCTURE_OBSERVER = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_OBSERVER
          }
        }).map(STRUCTURE_OBSERVER => STRUCTURE_OBSERVER.id);
      }
      this._STRUCTURE_OBSERVER = this.memory.STRUCTURE_OBSERVER.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_OBSERVER;
  },
  set: function(value) {
    this.memory.STRUCTURE_OBSERVER = value;
    this._STRUCTURE_OBSERVER = this.memory.STRUCTURE_OBSERVER.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_POWER_BANK', {
  get: function() {
    if (!this._STRUCTURE_POWER_BANK) {
      if (!this.memory.STRUCTURE_POWER_BANK) {
        this.memory.STRUCTURE_POWER_BANK = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_POWER_BANK
          }
        }).map(STRUCTURE_POWER_BANK => STRUCTURE_POWER_BANK.id);
      }
      this._STRUCTURE_POWER_BANK = this.memory.STRUCTURE_POWER_BANK.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_POWER_BANK;
  },
  set: function(value) {
    this.memory.STRUCTURE_POWER_BANK = value;
    this._STRUCTURE_POWER_BANK = this.memory.STRUCTURE_POWER_BANK.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_POWER_SPAWN', {
  get: function() {
    if (!this._STRUCTURE_POWER_SPAWN) {
      if (!this.memory.STRUCTURE_POWER_SPAWN) {
        this.memory.STRUCTURE_POWER_SPAWN = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_POWER_SPAWN
          }
        }).map(STRUCTURE_POWER_SPAWN => STRUCTURE_POWER_SPAWN.id);
      }
      this._STRUCTURE_POWER_SPAWN = this.memory.STRUCTURE_POWER_SPAWN.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_POWER_SPAWN;
  },
  set: function(value) {
    this.memory.STRUCTURE_POWER_SPAWN = value;
    this._STRUCTURE_POWER_SPAWN = this.memory.STRUCTURE_POWER_SPAWN.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_EXTRACTOR', {
  get: function() {
    if (!this._STRUCTURE_EXTRACTOR) {
      if (!this.memory.STRUCTURE_EXTRACTOR) {
        this.memory.STRUCTURE_EXTRACTOR = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_EXTRACTOR
          }
        }).map(STRUCTURE_EXTRACTOR => STRUCTURE_EXTRACTOR.id);
      }
      this._STRUCTURE_EXTRACTOR = this.memory.STRUCTURE_EXTRACTOR.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_EXTRACTOR;
  },
  set: function(value) {
    this.memory.STRUCTURE_EXTRACTOR = value;
    this._STRUCTURE_EXTRACTOR = this.memory.STRUCTURE_EXTRACTOR.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_LAB', {
  get: function() {
    if (!this._STRUCTURE_LAB) {
      if (!this.memory.STRUCTURE_LAB) {
        this.memory.STRUCTURE_LAB = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_LAB
          }
        }).map(STRUCTURE_LAB => STRUCTURE_LAB.id);
      }
      this._STRUCTURE_LAB = this.memory.STRUCTURE_LAB.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_LAB;
  },
  set: function(value) {
    this.memory.STRUCTURE_LAB = value;
    this._STRUCTURE_LAB = this.memory.STRUCTURE_LAB.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_TERMINAL', {
  get: function() {
    if (!this._STRUCTURE_TERMINAL) {
      if (!this.memory.STRUCTURE_TERMINAL) {
        this.memory.STRUCTURE_TERMINAL = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_TERMINAL
          }
        }).map(STRUCTURE_TERMINAL => STRUCTURE_TERMINAL.id);
      }
      this._STRUCTURE_TERMINAL = this.memory.STRUCTURE_TERMINAL.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_TERMINAL;
  },
  set: function(value) {
    this.memory.STRUCTURE_TERMINAL = value;
    this._STRUCTURE_TERMINAL = this.memory.STRUCTURE_TERMINAL.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_CONTAINER', {
  get: function() {
    if (!this._STRUCTURE_CONTAINER) {
      if (!this.memory.STRUCTURE_CONTAINER) {
        this.memory.STRUCTURE_CONTAINER = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_CONTAINER
          }
        }).map(STRUCTURE_CONTAINER => STRUCTURE_CONTAINER.id);
      }
      this._STRUCTURE_CONTAINER = this.memory.STRUCTURE_CONTAINER.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_CONTAINER;
  },
  set: function(value) {
    this.memory.STRUCTURE_CONTAINER = value;
    this._STRUCTURE_CONTAINER = this.memory.STRUCTURE_CONTAINER.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'STRUCTURE_NUKER', {
  get: function() {
    if (!this._STRUCTURE_NUKER) {
      if (!this.memory.STRUCTURE_NUKER) {
        this.memory.STRUCTURE_NUKER = this.find(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_NUKER
          }
        }).map(STRUCTURE_NUKER => STRUCTURE_NUKER.id);
      }
      this._STRUCTURE_NUKER = this.memory.STRUCTURE_NUKER.map(id => Game.getObjectById(id));
    }
    return this._STRUCTURE_NUKER;
  },
  set: function(value) {
    this.memory.STRUCTURE_NUKER = value;
    this._STRUCTURE_NUKER = this.memory.STRUCTURE_NUKER.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'SOURCE', {
  get: function() {
    if (!this._SOURCE) {
      if (!this.memory.SOURCE) {
        this.memory.SOURCE = this.find(FIND_SOURCES).map(source => source.id);
      }
      this._SOURCE = this.memory.SOURCE.map(id => Game.getObjectById(id));
    }
    return this._SOURCE;
  },
  set: function(value) {
    this.memory.SOURCE = value;
    this._SOURCE = this.memory.SOURCE.map(id => Game.getObjectById(id));
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'HARVESTSPOT', {
  get: function() {
    if (!this._HARVESTSPOT) {
      if (!this.memory.HARVESTSPOT) {
        this.memory.HARVESTSPOT = {};
        _.forEach(this.memory.SOURCE, source => {
          this.memory.HARVESTSPOT[source] = 0;
        });
      }
      this._HARVESTSPOT = this.memory.HARVESTSPOT;
    }
    return this._HARVESTSPOT;
  },
  set: function(value) {
    this.memory.HARVESTSPOT = value;
    this._HARVESTSPOT = this.memory.HARVESTSPOT;
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'NORTH', {
  get: function() {
    if (!this._NORTH) {
      if (!this.memory.NORTH) {
        this.memory.NORTH =
          this.name.slice(0, 1) +
          this.name.slice(1, 3) +
          this.name.slice(3, 4) +
          (parseInt(this.name.slice(4, 6)) + 1);
      }
      this._NORTH = this.memory.NORTH;
    }
    return this._NORTH;
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'SOUTH', {
  get: function() {
    if (!this._SOUTH) {
      if (!this.memory.SOUTH) {
        this.memory.SOUTH =
          this.name.slice(0, 1) +
          this.name.slice(1, 3) +
          this.name.slice(3, 4) +
          (parseInt(this.name.slice(4, 6)) - 1);
      }
      this._SOUTH = this.memory.SOUTH;
    }
    return this._SOUTH;
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'EAST', {
  get: function() {
    if (!this._EAST) {
      if (!this.memory.EAST) {
        this.memory.EAST =
          this.name.slice(0, 1) +
          (parseInt(this.name.slice(1, 3)) - 1) +
          this.name.slice(3, 4) +
          this.name.slice(4, 6);
      }
      this._EAST = this.memory.EAST;
    }
    return this._EAST;
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'WEST', {
  get: function() {
    if (!this._WEST) {
      if (!this.memory.WEST) {
        this.memory.WEST =
          this.name.slice(0, 1) +
          (parseInt(this.name.slice(1, 3)) + 1) +
          this.name.slice(3, 4) +
          this.name.slice(4, 6);
      }
      this._WEST = this.memory.WEST;
    }
    return this._WEST;
  },
  enumerable: false,
  configurable: true
});

var managerMemory = {
  run: function() {
    let startCPU = Game.cpu.getUsed();

    for (var i in Game.rooms) {
      if (!Game.rooms[i].UPDATES) {
        console.log('managerMemory : GENERATE ROOM UPDATES MEMORY');
      }

      if (Game.rooms[i].UPDATES.null) {
        console.log('managerMemory : delete null');
        delete Game.rooms[i].UPDATES.null;
      }
      if (Game.rooms[i].UPDATES.undefined) {
        console.log('managerMemory : delete undefined');
        delete Game.rooms[i].UPDATES.undefined;
      }

      if (_.filter(Game.rooms[i].UPDATES, t => t == true).length > 0) {
        //console.log('managerMemory : MEMORY UPDATES REQUIRED');

        if (Game.rooms[i].UPDATES.extension) {
          console.log('managerMemory : STRUCTURE_EXTENSION Updated');
          Game.rooms[i].STRUCTURE_EXTENSION = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_EXTENSION
            }
          }).map(STRUCTURE_EXTENSION => STRUCTURE_EXTENSION.id);
          Game.rooms[i].UPDATES.extension = false;
        }

        if (Game.rooms[i].UPDATES.spawn) {
          console.log('managerMemory : STRUCTURE_SPAWN Updated');
          Game.rooms[i].STRUCTURE_SPAWN = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_SPAWN
            }
          }).map(STRUCTURE_SPAWN => STRUCTURE_SPAWN.id);
          Game.rooms[i].UPDATES.spawn = false;
        }

        if (Game.rooms[i].UPDATES.road) {
          console.log('managerMemory : STRUCTURE_ROAD Updated');
          Game.rooms[i].STRUCTURE_ROAD = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_ROAD
            }
          }).map(STRUCTURE_ROAD => STRUCTURE_ROAD.id);
          Game.rooms[i].UPDATES.road = false;
        }

        if (Game.rooms[i].UPDATES.constructedWall) {
          console.log('managerMemory : STRUCTURE_WALL Updated');
          Game.rooms[i].STRUCTURE_WALL = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_WALL
            }
          }).map(STRUCTURE_WALL => STRUCTURE_WALL.id);
          Game.rooms[i].UPDATES.constructedWall = false;

        }

        if (Game.rooms[i].UPDATES.rampart) {
          console.log('managerMemory : STRUCTURE_RAMPART Updated');
          Game.rooms[i].STRUCTURE_RAMPART = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_RAMPART
            }
          }).map(STRUCTURE_RAMPART => STRUCTURE_RAMPART.id);
          Game.rooms[i].UPDATES.rampart = false;
        }

        if (Game.rooms[i].UPDATES.keeperLair) {
          console.log('managerMemory : STRUCTURE_KEEPER_LAIR Updated');
          Game.rooms[i].STRUCTURE_KEEPER_LAIR = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_KEEPER_LAIR
            }
          }).map(STRUCTURE_KEEPER_LAIR => STRUCTURE_KEEPER_LAIR.id);
          Game.rooms[i].UPDATES.keeperLair = false;
        }

        if (Game.rooms[i].UPDATES.portal) {
          console.log('managerMemory : STRUCTURE_PORTAL Updated');
          Game.rooms[i].STRUCTURE_PORTAL = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_PORTAL
            }
          }).map(STRUCTURE_PORTAL => STRUCTURE_PORTAL.id);
          Game.rooms[i].UPDATES.portal = false;
        }

        if (Game.rooms[i].UPDATES.controller) {
          console.log('managerMemory : STRUCTURE_CONTROLLER Updated');
          Game.rooms[i].STRUCTURE_CONTROLLER = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_CONTROLLER
            }
          }).map(STRUCTURE_CONTROLLER => STRUCTURE_CONTROLLER.id);
          Game.rooms[i].UPDATES.controller = false;
        }

        if (Game.rooms[i].UPDATES.link) {
          console.log('managerMemory : STRUCTURE_LINK Updated');
          Game.rooms[i].STRUCTURE_LINK = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_LINK
            }
          }).map(STRUCTURE_LINK => STRUCTURE_LINK.id);
          Game.rooms[i].UPDATES.link = false;
        }

        if (Game.rooms[i].UPDATES.storage) {
          console.log('managerMemory : STRUCTURE_STORAGE Updated');
          Game.rooms[i].STRUCTURE_STORAGE = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_STORAGE
            }
          }).map(STRUCTURE_STORAGE => STRUCTURE_STORAGE.id);
          Game.rooms[i].UPDATES.storage = false;
        }

        if (Game.rooms[i].UPDATES.tower) {
          console.log('managerMemory : STRUCTURE_TOWER Updated');
          Game.rooms[i].STRUCTURE_TOWER = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_TOWER
            }
          }).map(STRUCTURE_TOWER => STRUCTURE_TOWER.id);
          Game.rooms[i].UPDATES.tower = false;
        }

        if (Game.rooms[i].UPDATES.observer) {
          console.log('managerMemory : STRUCTURE_OBSERVER Updated');
          Game.rooms[i].STRUCTURE_OBSERVER = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_OBSERVER
            }
          }).map(STRUCTURE_OBSERVER => STRUCTURE_OBSERVER.id);
          Game.rooms[i].UPDATES.observer = false;
        }

        if (Game.rooms[i].UPDATES.powerBank) {
          console.log('managerMemory : STRUCTURE_POWER_BANK Updated');
          Game.rooms[i].STRUCTURE_POWER_BANK = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_POWER_BANK
            }
          }).map(STRUCTURE_POWER_BANK => STRUCTURE_POWER_BANK.id);
          Game.rooms[i].UPDATES.powerBank = false;
        }

        if (Game.rooms[i].UPDATES.powerSpawn) {
          console.log('managerMemory : STRUCTURE_POWER_SPAWN Updated');
          Game.rooms[i].STRUCTURE_POWER_SPAWN = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_POWER_SPAWN
            }
          }).map(STRUCTURE_POWER_SPAWN => STRUCTURE_POWER_SPAWN.id);
          Game.rooms[i].UPDATES.powerSpawn = false;
        }

        if (Game.rooms[i].UPDATES.extractor) {
          console.log('managerMemory : STRUCTURE_EXTRACTOR Updated');
          Game.rooms[i].STRUCTURE_EXTRACTOR = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_EXTRACTOR
            }
          }).map(STRUCTURE_EXTRACTOR => STRUCTURE_EXTRACTOR.id);
          Game.rooms[i].UPDATES.extractor = false;
        }

        if (Game.rooms[i].UPDATES.lab) {
          console.log('managerMemory : STRUCTURE_LAB Updated');
          Game.rooms[i].STRUCTURE_LAB = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_LAB
            }
          }).map(STRUCTURE_LAB => STRUCTURE_LAB.id);
          Game.rooms[i].UPDATES.lab = false;
        }

        if (Game.rooms[i].UPDATES.terminal) {
          console.log('managerMemory : STRUCTURE_TERMINAL Updated');
          Game.rooms[i].STRUCTURE_TERMINAL = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_TERMINAL
            }
          }).map(STRUCTURE_TERMINAL => STRUCTURE_TERMINAL.id);
          Game.rooms[i].UPDATES.terminal = false;
        }

        if (Game.rooms[i].UPDATES.container) {
          console.log('managerMemory : STRUCTURE_CONTAINER Updated');
          Game.rooms[i].STRUCTURE_CONTAINER = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_CONTAINER
            }
          }).map(STRUCTURE_CONTAINER => STRUCTURE_CONTAINER.id);
          Game.rooms[i].UPDATES.container = false;
        }

        if (Game.rooms[i].UPDATES.nuker) {
          console.log('managerMemory : STRUCTURE_NUKER Updated');
          Game.rooms[i].STRUCTURE_NUKER = Game.rooms[i].find(FIND_STRUCTURES, {
            filter: {
              structureType: STRUCTURE_NUKER
            }
          }).map(STRUCTURE_NUKER => STRUCTURE_NUKER.id);
          Game.rooms[i].UPDATES.nuker = false;
        }

        if (Game.rooms[i].UPDATES.source) {
          console.log('managerMemory : SOURCE Updated');
          Game.rooms[i].SOURCE = Game.rooms[i].find(FIND_SOURCES).map(source => source.id);
          Game.rooms[i].UPDATES.source = false;
        }

        if (Game.rooms[i].UPDATES.harvestSpot) {
          console.log('managerMemory : HARVESTSPOT Updated');
          _.forEach(Game.rooms[i].SOURCE, source => {
            Game.rooms[i].HARVESTSPOT[source.id] = 0;
          });
          Game.rooms[i].UPDATES.harvestSpot = false;
        }


      }
    }
    //console.log('managerMemory : MANAGER MEMORY CPU Used : ' + (Game.cpu.getUsed() - startCPU));
  }
};
module.exports = managerMemory;
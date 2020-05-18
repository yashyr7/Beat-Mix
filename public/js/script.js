// Drum Arrays
let kicks = initialize();
let snares = initialize();
let hiHats = initialize();
let rideCymbals = initialize();

function initialize() {
  var sound = [];
  for(var i = 0; i <= 15; i++) {
    sound.push(false);
  }
  return sound;
}

function toggleDrum(sound, index) {
  if((sound === "kicks" || sound === "snares" || sound === "hiHats" || sound === "rideCymbals") && index >= 0 && index <= 15) {
    if(sound === "kicks") {
      if(kicks[index] === true) {
        kicks[index] = false;
      } else if(kicks[index] === false) {
        kicks[index] = true;
      } else {
        return undefined;
      }
    } else if(sound === "snares") {
      if(snares[index] === true) {
        snares[index] = false;
      } else if(snares[index] === false) {
        snares[index] = true;
      } else {
        return undefined;
      }
    } else if(sound === "hiHats") {
      if(hiHats[index] === true) {
        hiHats[index] = false;
      } else if(hiHats[index] === false) {
        hiHats[index] = true;
      } else {
        return undefined;
      }
    } else if(sound === "rideCymbals") {
      if(rideCymbals[index] === true) {
        rideCymbals[index] = false;
      } else if(rideCymbals[index] === false) {
        rideCymbals[index] = true;
      } else {
        return undefined;
      }
    }
  }
}

function clear(sound) {
  if(sound === "kicks" || sound === "snares" || sound === "hiHats" || sound === "rideCymbals") {
    if(sound === "kicks") {
      kicks = initialize()
    } else if(sound === "snares") {
      snares = initialize();
    } else if(sound === "hiHats") {
      hiHats = initialize();
    } else if(sound === "rideCymbals") {
      rideCymbals = initialize();
    }
  }
}

function invert(sound) {
  if(sound === "kicks" || sound === "snares" || sound === "hiHats" || sound === "rideCymbals") {
    if(sound === "kicks") {
      for(var i = 0; i <= 15; i++) {
        if(kicks[i] === true) {
          kicks[i] = false;
        } else if(kicks[i] === false) {
          kicks[i] = true;
        } else {
          return undefined;
        }
      }
    } else if(sound === "snares") {
      for(var i = 0; i <= 15; i++) {
        if(snares[i] === true) {
          snares[i] = false;
        } else if(snares[i] === false) {
          snares[i] = true;
        } else {
          return undefined;
        }
      }
    } else if(sound === "hiHats") {
      for(var i = 0; i <= 15; i++) {
        if(hiHats[i] === true) {
          hiHats[i] = false;
        } else if(hiHats[i] === false) {
          hiHats[i] = true;
        } else {
          return undefined;
        }
      }
    } else if(sound === "rideCymbals") {
      for(var i = 0; i <= 15; i++) {
        if(rideCymbals[i] === true) {
          rideCymbals[i] = false;
        } else if(rideCymbals[i] === false) {
          rideCymbals[i] = true;
        } else {
          return undefined;
        }
      }
    }
  }
}

function getNeighborPads(x, y, size) {
  if(x < 0 || y < 0 || size <= 0 || x > size - 1 || y > size - 1) {
    return [];
  }
  if(x === 0 && y === 0) {
    return [[1, 0], [0, 1]];
  }
  if(x === size - 1 && y === 0) {
    return [[size - 2, 0], [size - 1, 1]];
  }
  if(x === 0 && y === size - 1) {
    return [[1, size - 1], [0, size - 2]];
  }
  if(x === size - 1 && y === size - 1) {
    return [[size - 1, size - 2], [size - 2, size - 1]];
  }
  if(y === 0) {
    return [[x , 1], [x + 1, 0], [x - 1, 0]];
  }
  if(x === 0) {
    return [[0 , y + 1], [x + 1, y], [0, y - 1]];
  }
  if(y === size - 1) {
    return [[x + 1 , size - 1], [x, size - 2], [x - 1, size - 1]];
  }
  if(x === size - 1) {
    return [[x , y + 1], [x, y - 1], [x - 1, y]];
  }
  return [[x, y + 1], [x + 1, y], [x, y - 1], [x - 1, y]];
}
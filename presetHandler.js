// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request_type, index, newPresetArray) => {
  if(index > 15 || index < 0) {
    return [404];
  }
  if(!(request_type === "GET" || request_type === "PUT")) {
    return [400];
  }
  if(request_type === "GET") {
    return [200, presets[index]];
  }
  if(request_type === "PUT") {
    presets[index] = newPresetArray;
    return [200, presets[index]];
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;

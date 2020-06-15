const config = require("config");

module.exports = function () {
  // TODO: Not DRY
  if (!config.get("steamApiKey")) {
    console.log("FATAL ERROR: steamApiKey is not defined.");
    process.exit(1);
  }

  if (!config.get("rconPassword")) {
    console.log("FATAL ERROR: rconPassword is not defined.");
    process.exit(1);
  }

  if (!config.get("serverIp")) {
    console.log("FATAL ERROR: serverIp is not defined.");
    process.exit(1);
  }

  console.log("NODE_ENV: " + process.env.NODE_ENV);
  console.log("NAME: " + config.get("name"));
}
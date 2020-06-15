// Before node index.js, do this:
// export steamApiKey=123456; export NODE_ENV=development; export serverIp=xxxxxxxxxx; export rconPassword=xxxxxxxxxx

require("./startup/config")();
require("./startup/logging")();
require("./startup/start")();



// throw new Error("This is the uncaught exception error!");
// const p = Promise.reject(new Error("Promise rejected!"));
// p.then(function(err) { console.log(err.message) });
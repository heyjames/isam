const util = require("util");
const exec = util.promisify(require("child_process").exec);
const config = require("config");

const rconPassword = config.get("rconPassword");
const serverIp = config.get("serverIp");

// function rcon() {
//   return Promise.resolve(exec(`rcon -H 12.123.123.12 -p 12345 -P xxxxxxxxxx listplayers`));
// }

function rcon(cmd) {
  return exec(`rcon -H ${serverIp} -p 27131 -P ${rconPassword} ${cmd}`);
}

// async function rcon() {

// Maybe try using "npm i await-timeout"
//   const p = new Promise(function(resolve, reject) {
// const { stdout, stderr } = exec(`rcon -H 12.123.123.12 -p 12345 -P xxxxxxxxxx listplayers`);
// console.log(stdout);
// resolve(stdout);
//   });

//   p.then(function(value) { return value;});

//   const timeout = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       reject(new Error("RCON connection failed."));
//     }, 5000);
//   });

//   Promise.race([p, timeout])
//     .then(function(value) {
//         console.log(value);
//         return value;
//     })
//     .catch(function(err) {
//         console.log(err.message);
//         process.exit(1);
//     });
//   }

module.exports = {
  rcon
}
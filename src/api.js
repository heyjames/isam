const { rcon } = require("../startup/rcon");
const test = require("../test/test");
const utils = require("./utils");

function say(str) {
  return rcon(`say ${str}`);
}

function getPlayers() {
  return rcon("listplayers")
    .then(function ({ stdout }) {
      // stdout = test.listPlayers(stdout); // TEST: Uncomment to test

      const myRegex = /\s(\d\d\d)\s.+?\|\s(.+?)\s\|\s(765\d{14})\s+?\|\s(\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b)\s+\|\s(\d+)\s+\|/g;
      let listPlayers = {};
      let roster = [];
      let numPlayers = 0;
      let match;

      while (match = myRegex.exec(stdout)) {
        let obj = {};

        obj.id = match[1];
        obj.steamName = match[2].trim();
        obj.steamId = match[3];
        obj.ip = match[4];
        obj.score = match[5];

        roster.push(obj);
      }

      numPlayers = roster.length;
      listPlayers.roster = roster;
      listPlayers.numPlayers = numPlayers;

      return listPlayers;
    });
}

/**
 * If the user types "!kick jame", this function will return the associated Steam ID. Multiple
 * or zero results will return immediately. Apparently, rcon already has the ability to filter
 * a single result and ignore multiple results when kicking.
 * @param  {String}  input
 * @return {String}
 */
async function getPlayerId(partialSteamName) {
  const players = await getPlayers();

  if (players.numPlayers === 0) return;
  if (partialSteamName.length <= 3) return console.log("Your input's gotta be at least 4 characters long.");

  let matches = [];
  let i = 0;
  
  while (i < players.numPlayers) {
    const steamName = players.roster[i].steamName;
    const regex = new RegExp(partialSteamName, "gi");
    const match = steamName.match(regex);
    if (match) matches.push(players.roster[i]);
    if (matches.length > 1) return console.log("Multiple matches.");
    i++;
  }

  if (matches.length === 0) return console.log("No matches.");

  const { steamId } = matches[0];
  matches.map(function ({ steamName }) { console.log(steamName); });

  return steamId;
}

// In the event a player teamkilled another and immediately disconnects
// (Alternative to looking at Recent Players list on Steam to grab their 
// Steam ID).
function getRecent() {

}

function kickid(steamId, reason = "") {
  let result = utils.isValidSteamId(steamId);

  // TODO: Send a chat message stating that the ID was invalid.
  if (!result) return new Error("Error: Invalid Steam ID");

  return rcon(`kick \\"${steamId}\\" \\"${reason}\\"`);
}

function kick(steamName, reason = "") {
  if (steamName.length === 0 || steamName === null || steamName === undefined) {
    return new Error("Error: No Steam name specified.");
  }

  return rcon(`kick \\"${steamName}\\" \\"${reason}\\"`);
}

// Move to separate file as a log watcher
function readLog() {

}

module.exports = {
  say, getPlayers, kick, kickid, getPlayerId
}
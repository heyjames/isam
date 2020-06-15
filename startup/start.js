const api = require("../src/api");
const utils = require("../src/utils");
const logWatcher = require("./logWatcher");

module.exports = async function start() {
  try {
    let players = await api.getPlayers();
    console.log(players);
    logWatcher.read();

    // console.log(typeof players.roster[0].steamId);

    // await say("Hi");

    // const reason = "Tactical servers require you to ask before stepping on capture zone.";
    // const steamName = "mes";
    // await api.kick(steamName);

    // const steamId = "76500000000000000"; // TEST: Valid steamId test
    // const steamId = "7650000000000000"; // TEST: Invalid steamId test
    // const steamId = "76500000000000000"; // TEST: Invalid steamId test
    // const steamId = "7650000000000000.0"; // TEST: Invalid steamId test
    // const steamId = "76500000000000000.0"; // TEST: Invalid steamId test
    // const { stdout } = await api.kickid(steamId);
    // console.log(stdout);
    // const steamId = await api.getPlayerId("jame");
    // console.log(steamId);

    // This can be refactored into a function to kick/ban/allowin players.
    // let i = 0;
    // while (i < players.length) {
    //   if (players[i].steamId === "76500000000000000") {
    //     console.log(players[i].steamName);
    //     break;
    //   }
    //   i++;
    // }

    // let i = 0;
    // while (i < players.numPlayers) {
    //   console.log(players.roster[i].steamName);
    //   i++;
    // }

  } catch (err) {
    console.log(err.message);
  }
}

// getPlayers().then((value) => { console.log(value) });
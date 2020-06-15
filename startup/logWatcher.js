const Tail = require("nodejs-tail");
const admin = require("../src/admin");

async function read() {
  const filename = "/home/public/sandstorm/Insurgency/Saved/Logs/Insurgency.log";
  const tail = new Tail(filename);

  tail.on("line", (line) => {
    // process.stdout.write(line);
    const logChat = /\[\d{4}\.\d{2}\.\d{2}\-\d{2}\.\d{2}\.\d{2}\:\d+\]\[\d+\]LogChat\:/g;
    const logGameState = /\[\d{4}\.\d{2}\.\d{2}\-\d{2}\.\d{2}\.\d{2}\:\d+\]\[\d+\]LogGameState\:/g;
    const onChat = logChat.test(line);
    const onGameState = logGameState.test(line);

    if (onChat) handleChat(line);
    if (onGameState) handleGameState(line);


    // while (match = chat.exec(line)) {
    //   console.log(match);
    // }

  });

  // tail.on("close", () => {
  //   console.log("watching stopped");
  // })

  tail.watch();
}

function handleChat(line) {
  // console.log(line);
  const adminReq = /\[\d{4}\.\d{2}\.\d{2}\-\d{2}\.\d{2}\.\d{2}\:\d{3}\]\[\d{3}\]LogChat\:\sDisplay\:\s(.+?)\((765\d{14})\)\s(Global\s|Team\s\d\s)Chat\:\s(\!.+)/g;
  // const match = adminReq.test(line);
  // const completeCmd = adminReq.exec(line)[4];
  console.log(adminReq.exec(line));
  // if (match) admin(completeCmd);


  // console.log("Handling chat message!");
}

function handleGameState() {
  // console.log("Handling game state!");
}

// read();
module.exports = {
  read
};
// function parseLine(line) {
//   const chat = /(\[\d{4}\.\d{2}\.\d{2}\-\d{2}\.\d{2}\.\d{2}\:\d{3}\])\[\d{3}\]LogChat\:\sDisplay\:\s(.+?)\((765\d{14})\)\s(Global\s|Team\s\d\s)Chat\:\s(\w+|\!\w+)\s(.+\W?)/g;

//   let match;
//   let firstWord;
//   let secondWord;
//   while (match = chat.exec(line)) {
//     firstWord = match[5];
//     secondWord = match[6];
//   }

//   console.log(firstWord);
//   console.log(secondWord);
// }
// [2020.03.21-05.58.33:186][471]LogChat: Display: James(76500000000000000) Global Chat: hello
// [2020.03.21-06.03.22:587][749]LogChat: Display: James(76500000000000000) Team 0 Chat: hello
// [2020.03.21-07.36.34:633][304]LogGameMode: Display: State: PreRound -> RoundActive
// [2020.03.21-07.36.34:634][304]LogGameState: Match State Changed from PreRound to RoundActive
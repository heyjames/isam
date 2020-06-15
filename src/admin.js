module.exports = (completeCmd) => {
  let match;
  let firstWord;
  let secondWord;
  // console.log(adminReq);
  const adminReq = /\[\d{4}\.\d{2}\.\d{2}\-\d{2}\.\d{2}\.\d{2}\:\d{3}\]\[\d{3}\]LogChat\:\sDisplay\:\s(.+?)\((765\d{14})\)\s(Global\s|Team\s\d\s)Chat\:\s(\!.+)/g;
  // TODO: I couldn't pass this regex in the above line to this function. Try using a new Regex object

  // while (match = adminReq.exec(completeCmd)) {
    if (completeCmd.length > 50) return console.log("What kind of long input is this?");
    const myRegex = /\!(\w+)\s(.+)/g;
    match = myRegex.exec(completeCmd);
    console.log(match2[1]);
    console.log(match2[2]);
    // adminCmd = adminCmd.substr(1).split(" ")[0];
    // console.log(adminCmd);
    
    // if (match) {
    // firstWord = match[5];
    // secondWord = match[6];
    // console.log(match[7]);
    // console.log(match[5]);
    // }
    // if (firstWord.substring(0, 1) === "!") {
    //   console.log(firstWord);
    // }
    // console.log(firstWord);
    // console.log(secondWord);
  // }
  console.log("Handling admin functions!");
}

function kick() {
  // kick user
}
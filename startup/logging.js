function handler(ex) {
  console.log(ex.message);
  process.exit(1);
}

module.exports = function () {
  process.on("uncaughtException", handler);
  process.on("unhandledRejection", handler);
}
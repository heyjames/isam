/**
 * Checks if user entered a valid Steam ID in chat. E.g. !kick 76500000000000000
 * @param  {String}  steamId Steam ID: 76500000000000000
 * @return {Boolean}
 */
function isValidSteamId(steamId) {
  if (steamId.length !== 17) return false;
  if (parseInt(steamId.slice(0, 3)) !== 765) return false;

  return true;
}

module.exports = {
  isValidSteamId
}
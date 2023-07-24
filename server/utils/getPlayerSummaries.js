import convertSteamIDFrom32To64 from './convertSteamIDFrom32To64.js';

const getPlayerSummaries = async (steam32IDs) => {
  const steamUserApi =
    'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';
  const apiKey = process.env.STEAM_API_KEY;
  const steam64IDs = steam32IDs.map(convertSteamIDFrom32To64);
  const response = await fetch(
    `${steamUserApi}?key=${apiKey}&steamids=${steam64IDs.join(',')}`
  );
  const data = await response.json();

  return data.response.players.reduce((acc, { personaname }, index) => {
    acc[steam32IDs[index]] = personaname;
    return acc;
  }, {});
};

export default getPlayerSummaries;

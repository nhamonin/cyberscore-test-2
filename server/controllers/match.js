import formatTime from '../utils/formatTime.js';
import getPlayerSummaries from '../utils/getPlayerSummaries.js';
import heroes from '../data/heroes.json' assert { type: 'json' };

const getMatchDetails = async (req, res) => {
  const match_id = req.params.match_id;
  const steamApiKey = process.env.STEAM_API_KEY;

  try {
    const response = await fetch(
      `https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1?match_id=${match_id}&key=${steamApiKey}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    if (data.result.error) {
      throw new Error(data.result.error);
    }

    const steam32IDs = data.result.players.map((player) => player.account_id);
    const idToNameMap = await getPlayerSummaries(steam32IDs);

    res.json({
      result: {
        ...data.result,
        duration: formatTime(data.result.duration),
        players: data.result.players.map((player) => ({
          ...player,
          hero_name: heroes[player.hero_id].localized_name,
          account_name: idToNameMap[player.account_id],
        })),
      },
    });
  } catch (error) {
    res.json({ error: error.toString() });
  }
};

export default getMatchDetails;

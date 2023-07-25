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
        radiant_name: data.result.radiant_name,
        dire_name: data.result.dire_name,
        match_id: data.result.match_id,
        radiant_score: data.result.radiant_score,
        dire_score: data.result.dire_score,
        tower_status_radiant: data.result.tower_status_radiant,
        tower_status_dire: data.result.tower_status_dire,
        barracks_status_radiant: data.result.barracks_status_radiant,
        barracks_status_dire: data.result.barracks_status_dire,
        radiant_win: data.result.radiant_win,
        duration: formatTime(data.result.duration),
        players: data.result.players.map((player) => ({
          account_id: player.account_id,
          team_number: player.team_number,
          hero_name:
            heroes.find((hero) => hero.id === player.hero_id).localized_name ||
            'Unknown',
          account_name: idToNameMap[player.account_id] || 'Hidden',
        })),
      },
    });
  } catch (error) {
    res.json({ error: error.toString() });
  }
};

export default getMatchDetails;

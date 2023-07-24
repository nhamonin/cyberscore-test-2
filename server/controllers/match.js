import { formatTime } from '../utils/formatTime.js';

const getMatchDetails = async (req, res) => {
  const match_id = req.params.match_id;
  const steamApiKey = process.env.STEAM_API_KEY;

  try {
    const response = await fetch(
      `https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1?match_id=${match_id}&key=${steamApiKey}`
    );
    const data = await response.json();
    res.json({
      result: {
        ...data.result,
        duration: formatTime(data.result.duration),
      },
    });
  } catch (error) {
    res.json({ error: error.toString() });
  }
};

export default getMatchDetails;

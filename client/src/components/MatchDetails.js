import PropTypes from 'prop-types';
import Minimap from './Minimap';

const generatePlayerList = (players, teamNumber) => {
  return players
    .filter((player) => player.team_number === teamNumber)
    .map((player) => `${player.account_name} (${player.hero_name})`)
    .join(', ');
};

const MatchDetails = ({ matchData }) => {
  if (!matchData) {
    return null;
  }

  const {
    radiant_name,
    dire_name,
    match_id,
    duration,
    radiant_score,
    dire_score,
    players,
  } = matchData;

  return (
    <section className="flex flex-col justify-between md:flex-row bg-white rounded-lg shadow-md p-6">
      <div className="pr-6">
        {radiant_name && dire_name && (
          <h2 className="text-xl font-semibold">
            {radiant_name} vs {dire_name}
          </h2>
        )}
        <p>ID: {match_id}</p>
        <p>Time: {duration}</p>
        <p>
          Score: {radiant_score} - {dire_score}
        </p>
        <p>
          <span className="font-bold">Radiant</span> Players:{' '}
          <span>{generatePlayerList(players, 0)}</span>
        </p>
        <p>
          <span className="font-bold">Dire</span> Players:{' '}
          <span>{generatePlayerList(players, 1)}</span>
        </p>
      </div>
      <div className="mt-6 md:mt-0">
        <Minimap
          towerStatusRadiant={matchData.tower_status_radiant}
          towerStatusDire={matchData.tower_status_dire}
          barracksStatusRadiant={matchData.barracks_status_radiant}
          barracksStatusDire={matchData.barracks_status_dire}
        />
      </div>
    </section>
  );
};

MatchDetails.propTypes = {
  matchData: PropTypes.shape({
    radiant_name: PropTypes.string,
    dire_name: PropTypes.string,
    match_id: PropTypes.number,
    duration: PropTypes.string,
    radiant_score: PropTypes.number,
    dire_score: PropTypes.number,
    players: PropTypes.arrayOf(
      PropTypes.shape({
        team_number: PropTypes.number,
        account_name: PropTypes.string,
        hero_name: PropTypes.string,
      })
    ),
    tower_status_radiant: PropTypes.number,
    tower_status_dire: PropTypes.number,
    barracks_status_radiant: PropTypes.number,
    barracks_status_dire: PropTypes.number,
  }),
};

export default MatchDetails;

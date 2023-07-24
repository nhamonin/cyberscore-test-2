import Minimap from './Minimap';

const MatchDetails = ({ matchData }) => {
  if (!matchData) {
    return null;
  }

  return (
    <div className="flex bg-white rounded-lg shadow-md p-6">
      <div className="w-2/3 pr-6">
        {matchData.radiant_name && matchData.dire_name && (
          <p className="text-xl font-semibold">
            {matchData.radiant_name} vs {matchData.dire_name}
          </p>
        )}
        <p>ID: {matchData.match_id}</p>
        <p>Time: {matchData.duration}</p>
        <p>
          Score: {matchData.radiant_score} - {matchData.dire_score}
        </p>
        <p>
          <span className="font-bold">Radiant</span> Players:{' '}
          <span>
            {matchData.players
              .filter((player) => player.team_number === 0)
              .map((player) => `${player.account_id} (${player.hero_id})`)
              .join(', ')}
          </span>
        </p>
        <p>
          <span className="font-bold">Dire</span> Players:{' '}
          <span>
            {matchData.players
              .filter((player) => player.team_number === 1)
              .map((player) => `${player.account_id} (${player.hero_id})`)
              .join(', ')}
          </span>
        </p>
      </div>
      <div className="w-1/3">
        <Minimap />
      </div>
    </div>
  );
};

export default MatchDetails;

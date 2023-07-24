import Minimap from './Minimap';

const MatchDetails = ({ matchData }) => {
  if (!matchData) {
    return null;
  }

  return (
    <div className="flex flex-col justify-between md:flex-row bg-white rounded-lg shadow-md p-6">
      <div className="pr-6">
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
              .map((player) => `${player.account_name} (${player.hero_name})`)
              .join(', ')}
          </span>
        </p>
        <p>
          <span className="font-bold">Dire</span> Players:{' '}
          <span>
            {matchData.players
              .filter((player) => player.team_number === 1)
              .map((player) => `${player.account_name} (${player.hero_name})`)
              .join(', ')}
          </span>
        </p>
      </div>
      <div className="mt-6 md:mt-0">
        <Minimap />
      </div>
    </div>
  );
};

export default MatchDetails;

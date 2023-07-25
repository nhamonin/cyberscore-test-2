import PropTypes from 'prop-types';

const InputMatchId = ({ matchId, setMatchId }) => {
  return (
    <input
      type="text"
      placeholder="Enter match ID"
      value={matchId}
      onChange={(e) => setMatchId(e.target.value)}
      className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
    />
  );
};

InputMatchId.propTypes = {
  matchId: PropTypes.string.isRequired,
  setMatchId: PropTypes.func.isRequired,
};

export default InputMatchId;

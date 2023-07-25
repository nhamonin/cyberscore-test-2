import PropTypes from 'prop-types';

const FetchButton = ({ matchId, setMatchData, setIsLoading, setError }) => {
  const fetchMatchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/match/${matchId}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMatchData(data.result);
    } catch (err) {
      setMatchData(null);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={fetchMatchData}
      disabled={!matchId}
      className={`font-bold py-2 px-4 rounded ml-4 text-white ${
        matchId
          ? 'bg-blue-500 hover:bg-blue-700'
          : 'bg-blue-200 pointer-events-none'
      }`}
    >
      Get match data
    </button>
  );
};

FetchButton.propTypes = {
  matchId: PropTypes.string.isRequired,
  setMatchData: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default FetchButton;

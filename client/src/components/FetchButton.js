import React from 'react';

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
      setMatchData(data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={fetchMatchData}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
    >
      Get match data
    </button>
  );
};

export default FetchButton;

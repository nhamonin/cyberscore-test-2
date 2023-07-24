import React, { useState } from 'react';
import FetchButton from './components/FetchButton';
import InputMatchId from './components/InputMatchId';
import MatchDetails from './components/MatchDetails';
import Error from './components/Error';
import Loading from './components/Loading';

function App() {
  const [matchId, setMatchId] = useState('');
  const [matchData, setMatchData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Dota 2 Match Data
        </h1>
        <InputMatchId matchId={matchId} setMatchId={setMatchId} />
        <FetchButton
          matchId={matchId}
          setMatchData={setMatchData}
          setIsLoading={setIsLoading}
          setError={setError}
        />
      </div>
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      <MatchDetails matchData={matchData} />
    </div>
  );
}

export default App;

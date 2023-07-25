import React, { useState } from 'react';
import FetchButton from './components/FetchButton';
import InputMatchId from './components/InputMatchId';
import MatchDetails from './components/MatchDetails';
import Error from './components/Error';
import MatchDetailsLoading from './components/MatchDetailsLoading';

function App() {
  const [matchId, setMatchId] = useState('');
  const [matchData, setMatchData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-start items-center pt-10">
      <div className="mb-4 flex justify-center flex-col">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Dota 2 Match Data
        </h1>
        <div className="flex justify-center space-x-4">
          <InputMatchId matchId={matchId} setMatchId={setMatchId} />
          <FetchButton
            matchId={matchId}
            setMatchData={setMatchData}
            setIsLoading={setIsLoading}
            setError={setError}
          />
        </div>
      </div>
      {error && <Error error={error} />}
      {isLoading ? (
        <MatchDetailsLoading />
      ) : (
        matchData && <MatchDetails matchData={matchData} />
      )}
    </div>
  );
}

export default App;

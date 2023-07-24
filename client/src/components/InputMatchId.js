import React from 'react';

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

export default InputMatchId;

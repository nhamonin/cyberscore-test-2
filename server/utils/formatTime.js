export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

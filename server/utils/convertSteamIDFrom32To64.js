const convertSteamIDFrom32To64 = (steamID32) => {
  const steamID64Base = BigInt('76561197960265728');
  return (BigInt(steamID32) + steamID64Base).toString();
};

export default convertSteamIDFrom32To64;

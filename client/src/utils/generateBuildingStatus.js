import config from '../minimapConfig';

const generateBuildingStatus = (status, buildings, color, type) => {
  return buildings.map((building, i) => {
    const isAlive = ((status >> i) & 1) === 1;
    const { x, y, colorTest } = building;
    const backgroundColor = isAlive ? color : 'red';

    return (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: `${x}%`,
          top: `${y}%`,
          width: `${config[type].size}px`,
          height: `${config[type].size}px`,
          backgroundColor: colorTest || backgroundColor,
          borderRadius: `${config[type].borderRadius}%`,
          border: '2px solid black',
          transform: 'translate(-50%, -50%)',
          zIndex: config[type].zIndex,
        }}
      ></div>
    );
  });
};

export default generateBuildingStatus;

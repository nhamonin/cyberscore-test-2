const generateBuildingStatus = (status, buildings, color, type) => {
  return buildings.map((building, i) => {
    const isAlive = ((status >> i) & 1) === 1;
    const { x, y, colorTest } = building;
    const size = type === 'tower' ? '15px' : '10px';
    const backgroundColor = isAlive ? color : 'red';
    const borderRadius = type === 'tower' ? '50%' : '0';

    return (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: `${x}%`,
          top: `${y}%`,
          width: size,
          height: size,
          backgroundColor: colorTest || backgroundColor,
          borderRadius,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    );
  });
};

export default generateBuildingStatus;

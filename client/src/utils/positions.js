const positionsRadiant = {
  towers: [
    { x: 20, y: 95, colorTest: 'aqua' },
    { x: 15, y: 85 },
    { x: 5, y: 75 },
    { x: 30, y: 70 },
    { x: 20, y: 80 },
    { x: 10, y: 90 },
    { x: 40, y: 60 },
    { x: 30, y: 70 },
    { x: 20, y: 80 },
    { x: 5, y: 95 },
    { x: 10, y: 90 },
  ],
  barracks: [
    { x: 7, y: 73 },
    { x: 7, y: 70 },
    { x: 12, y: 88 },
    { x: 15, y: 85 },
    { x: 27, y: 93 },
    { x: 30, y: 93 },
  ],
};

const mirrorPositions = (buildings) => {
  return buildings.map((building) => ({
    x: 100 - building.x,
    y: 100 - building.y,
    colorTest: building.colorTest,
  }));
};

const positions = {
  Radiant: positionsRadiant,
  Dire: {
    towers: mirrorPositions(positionsRadiant.towers),
    barracks: mirrorPositions(positionsRadiant.barracks),
  },
};

export default positions;

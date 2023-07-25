const config = {
  tower: {
    size: 18,
    borderRadius: 50,
    zIndex: 2,
    positions: {
      Radiant: [
        { x: 17, y: 40.5 }, // Top tier 1
        { x: 16, y: 53 }, // Top tier 2
        { x: 15.25, y: 69 }, // Top tier 3
        { x: 42, y: 57 }, // Middle tier 1
        { x: 34, y: 63 }, // Middle tier 2
        { x: 24, y: 73 }, // Middle tier 3
        { x: 76, y: 81 }, // Bottom tier 1
        { x: 50, y: 83 }, // Bottom tier 2
        { x: 28, y: 82 }, // Bottom tier 3
        { x: 20, y: 81 }, // Ancient tier 1
        { x: 16, y: 77 }, // Ancient tier 2
      ],
      Dire: [
        { x: 24, y: 19 }, // Top tier 1
        { x: 50, y: 17 }, // Top tier 2
        { x: 72, y: 18 }, // Top tier 3
        { x: 58, y: 43 }, // Middle tier 1
        { x: 66, y: 37 }, // Middle tier 2
        { x: 76, y: 27 }, // Middle tier 3
        { x: 83, y: 59.5 }, // Bottom tier 1
        { x: 84, y: 47 }, // Bottom tier 2
        { x: 84.75, y: 31 }, // Bottom tier 3
        { x: 80, y: 19 }, // Ancient tier 1
        { x: 84, y: 23 }, // Ancient tier 2
      ],
    },
  },
  barrack: {
    size: 11,
    borderRadius: 0,
    zIndex: 1,
    positions: {
      Radiant: [
        { x: 16.5, y: 71.5 }, // Top melee
        { x: 14, y: 71.5 }, // Top ranged
        { x: 21.5, y: 74 }, // Middle melee
        { x: 23.5, y: 76 }, // Middle ranged
        { x: 25.3, y: 83 }, // Bottom melee
        { x: 25.3, y: 81 }, // Bottom ranged
      ],
      Dire: [
        { x: 74.7, y: 16.5 }, // Top melee
        { x: 74.7, y: 19 }, // Top ranged
        { x: 78.5, y: 26 }, // Middle melee
        { x: 76.5, y: 24 }, // Middle ranged
        { x: 83.5, y: 28.5 }, // Bottom melee
        { x: 86, y: 28.5 }, // Bottom ranged
      ],
    },
  },
  ancient: {
    size: 34,
    borderRadius: 50,
    zIndex: 1,
    positions: {
      Radiant: [{ x: 14, y: 83 }],
      Dire: [{ x: 86, y: 17 }],
    },
  },
};

export default config;

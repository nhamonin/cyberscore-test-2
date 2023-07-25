import PropTypes from 'prop-types';

import config from '../minimapConfig';
import generateBuildingStatus from '../utils/generateBuildingStatus';

const buildingTypes = ['tower', 'barrack', 'ancient'];
const teams = ['Radiant', 'Dire'];
const colors = { Radiant: 'limegreen', Dire: 'darkgreen' };

const Minimap = (props) => {
  return (
    <div
      className="relative bg-center bg-cover w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-auto"
      style={{ backgroundImage: `url(/map.webp)` }}
    >
      {buildingTypes.map((type) =>
        teams.map((team) =>
          generateBuildingStatus(
            props[`${type}Status${team}`],
            config[type].positions[team],
            colors[team],
            type
          )
        )
      )}
    </div>
  );
};

Minimap.propTypes = buildingTypes.reduce(
  (acc, type) =>
    teams.reduce(
      (acc2, team) => ({
        ...acc2,
        [`${type}Status${team}`]: PropTypes.number.isRequired,
      }),
      acc
    ),
  {}
);

export default Minimap;

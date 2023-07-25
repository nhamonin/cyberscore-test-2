import PropTypes from 'prop-types';

import config from '../minimapConfig';
import generateBuildingStatus from '../utils/generateBuildingStatus';

const buildingTypes = ['tower', 'barrack', 'ancient'];
const teams = ['Radiant', 'Dire'];
const colors = { Radiant: 'limegreen', Dire: 'darkgreen' };

const Minimap = (props) => {
  return (
    <div
      className="relative bg-center bg-cover w-[400px] h-[400px]"
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

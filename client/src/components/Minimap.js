import PropTypes from 'prop-types';

import positions from '../utils/positions';
import generateBuildingStatus from '../utils/generateBuildingStatus';

const Minimap = ({
  towerStatusRadiant,
  towerStatusDire,
  barracksStatusRadiant,
  barracksStatusDire,
}) => {
  return (
    <div
      className="relative bg-center bg-cover w-[300px] h-[300px]"
      style={{ backgroundImage: `url(/map.webp)` }}
    >
      {generateBuildingStatus(
        towerStatusRadiant,
        positions.Radiant.towers,
        'green',
        'tower'
      )}
      {generateBuildingStatus(
        barracksStatusRadiant,
        positions.Radiant.barracks,
        'green',
        'barrack'
      )}
      {generateBuildingStatus(
        towerStatusDire,
        positions.Dire.towers,
        'blue',
        'tower'
      )}
      {generateBuildingStatus(
        barracksStatusDire,
        positions.Dire.barracks,
        'blue',
        'barrack'
      )}
    </div>
  );
};

Minimap.propTypes = {
  towerStatusRadiant: PropTypes.number.isRequired,
  towerStatusDire: PropTypes.number.isRequired,
  barracksStatusRadiant: PropTypes.number.isRequired,
  barracksStatusDire: PropTypes.number.isRequired,
};

export default Minimap;

/* eslint-disable camelcase */
import PropTypes from 'prop-types';

const Missions = (props) => {
  const { mission: { mission_name, description } } = props;
  return (
    <tbody>
      <tr>
        <td>{mission_name}</td>
        <td>{description}</td>
      </tr>
    </tbody>
  );
};

Missions.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Missions;

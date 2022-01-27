/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

const Missions = (props) => {
  const {
    mission: {
      id, mission_name, description, membership,
    },
  } = props;
  const dispatch = useDispatch();
  const handleJoin = () => {
    dispatch(joinMission(id));
  };

  return (
    <tbody>
      <tr>
        <td>{mission_name}</td>
        <td>{description}</td>
        <td>{membership ? (<p> Active Member </p>) : (<p> NOT A MEMBER </p>)}</td>
        <td>{membership ? (<button type="button" onClick={handleJoin}> Leave Mission </button>) : (<button type="button" onClick={handleJoin}> Join Mission </button>)}</td>
      </tr>
    </tbody>
  );
};

Missions.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.number,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    membership: PropTypes.bool,
  }).isRequired,
};

export default Missions;

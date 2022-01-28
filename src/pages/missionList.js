import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission, fetchMissionApi } from '../redux/missions/missions';

const MissionList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.missionsReducer.missions);
  const missions = Object.values(data);

  useEffect(() => {
    dispatch(fetchMissionApi());
  }, []);

  const btnClass = (joined) => {
    let classes = 'btn btn-block btn-outline-';
    classes += joined ? 'danger' : 'dark';
    return classes;
  };

  const badgeClass = (joined) => {
    let classes = 'badge bg-';
    classes += joined ? 'info' : 'secondary';
    return classes;
  };

  const handleMission = (e) => {
    if (e.target.textContent === 'Leave mission') {
      dispatch(leaveMission(e.target.id));
    } else {
      dispatch(joinMission(e.target.id));
    }
  };

  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col" style={{ width: '10%' }}>Mission</th>
            <th scope="col" style={{ width: '66%' }}>Description </th>
            <th scope="col" style={{ width: '12%' }}>Status</th>
            <th scope="col" style={{ width: '12%' }}>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => {
            const btn = btnClass(mission.joined);
            const bdj = badgeClass(mission.joined);
            let memberStatus;
            let memberAction;
            if (mission.joined) {
              memberAction = 'Leave mission';
              memberStatus = 'Active member';
            } else {
              memberAction = 'Join mission';
              memberStatus = 'NOT A MEMBER';
            }
            return (
              <tr key={mission.mission_id} className="pb-5">
                <td>{mission.mission_name}</td>
                <td className="pb-4">{mission.description}</td>
                <td>
                  <span className={bdj}>{memberStatus}</span>
                </td>
                <td>
                  <button id={mission.mission_id} type="button" style={{ padding: '10px' }} className={btn} onClick={handleMission}>{memberAction}</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MissionList;

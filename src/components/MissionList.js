import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionApi } from '../redux/missions/missions';
import Missions from '../pages/Missions';

const MissionList = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissionApi());
  }, [dispatch]);

  return (
    <section className="table-container">
      <table>
        <thead>
          <tr>
            <th className="table-col-1">Mission</th>
            <th className="table-col-2">Description</th>
            <th className="table-col -3">Status</th>
            <th className="table-col-4">Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Missions key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MissionList;

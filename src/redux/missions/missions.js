// import { element } from 'prop-types';

const FETCH_MISSIONS = 'FETCH_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const fetchMission = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const fetchMissionApi = () => async (dispatch) => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  const missions = [];
  for (let i = 0; i < response.length; i += 1) {
    const title = response[i].mission_name;
    const id = response[i].mission_id;
    const { description } = response[i];
    const membership = false;
    const object = {
      id, title, description, membership,
    };
    missions.push(object);
  }
  dispatch(fetchMission(missions));
};

const updateMembership = (state, payload) => {
  const currentState = state.missions.map((mission) => {
    if (mission.id !== payload) return mission;
    return { ...mission, membership: !mission.membership };
  });
  return currentState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        missions: action.payload,
      };
    case JOIN_MISSION:
      return updateMembership(state, action.payload);

    default:
      return state;
  }
};

export default reducer;

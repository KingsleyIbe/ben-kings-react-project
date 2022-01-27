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
  dispatch(fetchMission(response));
};

const updateMembership = (state, payload) => {
  const currentState = state.map((mission) => {
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

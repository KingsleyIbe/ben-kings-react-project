const FETCH_MISSIONS = 'FETCH_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

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

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const fetchMissionApi = () => async (dispatch) => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  dispatch(fetchMission(response));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        missions: action.payload,
      };
    case JOIN_MISSION: {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      return { missions: newState };
    }
    case LEAVE_MISSION: {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });
      return { missions: newState };
    }

    default:
      return state;
  }
};

export default reducer;

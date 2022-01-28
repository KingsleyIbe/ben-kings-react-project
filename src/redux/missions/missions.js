const FETCH_MISSIONS = 'FETCH_MISSIONS';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const fetchMission = (payload) => ({
  type: FETCH_MISSIONS,
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

    default:
      return state;
  }
};

export default reducer;

const FETCH_ROCKETS = 'FETCH_ROCKETS';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
};

export const fetchRocket = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const fetchRocketsApi = () => async (dispatch) => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  dispatch(fetchRocket(response));
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return {
        rockets: action.payload,
      };

    default:
      return state;
  }
};

export default rocketsReducer;

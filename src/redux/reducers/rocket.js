const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const UNRESERVE_ROCKET = 'UNRESERVE_ROCKET';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
};

export const fetchRocket = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const unreserveRocket = (payload) => ({
  type: UNRESERVE_ROCKET,
  payload,
});

export const fetchRocketsApi = () => async (dispatch) => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  dispatch(fetchRocket(response));
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) return rocket;
        return { ...rocket, reserved: true };
      });
    case UNRESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) return rocket;
        return { ...rocket, reserved: false };
      });
    case FETCH_ROCKETS:
      return {
        rockets: action.payload,
      };

    default:
      return state;
  }
};

export default rocketsReducer;

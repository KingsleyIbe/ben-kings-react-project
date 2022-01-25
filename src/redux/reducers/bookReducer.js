import { ADD_MISSIONS } from '../actions/types';

const initialState = {
  missions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSIONS:
      return {
        books: [...state.books, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;

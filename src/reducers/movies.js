import { SET_MOVIES } from '../actions';

export const moviesReducer = (state, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {...state, movieSearch:action.value};
    default:
      return state;
  }    
};
import { createStore } from 'redux';
import { moviesReducer } from '../reducers/movies';

const initialState = {
  movieSearch: 'Eva'
};



export const store = createStore(moviesReducer, initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
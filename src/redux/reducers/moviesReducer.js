// src/redux/reducers/moviesReducer.js
import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_GENRES_SUCCESS,
  } from '../actions/movieActions';
  
  const initialState = {
    loading: false,
    movies: [],
    genres: [],
    error: '',
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES_REQUEST:
        return { ...state, loading: true };
      case FETCH_MOVIES_SUCCESS:
        return { ...state, loading: false, movies: action.payload };
      case FETCH_GENRES_SUCCESS:
        return { ...state, genres: action.payload };
      case FETCH_MOVIES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  
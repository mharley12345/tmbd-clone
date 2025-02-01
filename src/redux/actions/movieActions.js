// src/redux/actions/movieActions.js
import axios from 'axios';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';

const API_KEY = '6f684921c8b90f941d9db6981979d539';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });
  try {
    const moviesResponse = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const genresResponse = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: moviesResponse.data.results });
    dispatch({ type: FETCH_GENRES_SUCCESS, payload: genresResponse.data.genres });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
  }
};

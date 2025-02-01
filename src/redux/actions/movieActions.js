// src/redux/actions/movieActions.js
import axios from 'axios';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

const API_KEY = '6f684921c8b90f941d9db6981979d539';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
  }
};

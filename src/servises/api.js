import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_ID = 'api_key=fbc84fa674b06783dc43ba499dadf74a';

export const fetchMoviesTrending = () =>
  axios.get(`${BASE_URL}trending/movie/day?${KEY_ID}`);

export const fetchMovieID = id =>
  axios.get(`${BASE_URL}movie/${id}?${KEY_ID}&language=en-US`);

export const fetchMovieCast = id =>
  axios.get(`${BASE_URL}movie/${id}/credits?${KEY_ID}`);

export const fetchMovieReviews = id =>
  axios.get(`${BASE_URL}movie/${id}/reviews?${KEY_ID}&language=en-US&page=1`);

export const fetchMoviesSearch = query =>
  axios.get(`${BASE_URL}search/movie?${KEY_ID}&language=en-US&query=${query}`);

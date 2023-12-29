import axios from 'axios';
const API_KEY = 'cba4a9d06446c18bc3af1e3af31e1bf6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getTrending = async () => {
  const response = await axios.get('trending/all/day');
  return response.data;
};
export const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}`);
  return response.data;
};
export const getActorsDetails = async id => {
  // 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US', options)
  const response = await axios.get(`movie/${id}/credits`);
  return response.data;
};
export const getMovieReviews = async id => {
  // 'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1', options)
  const response = await axios.get(`movie/${id}/reviews`);
  return response.data;
};
export const searchMovie = async query => {
  //  ('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1');
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&page=1`
  );
  return response.data;
};

import axios from 'axios';
const KEY = '18ae920eccc30023e44661ce76c3e71c';
const SRCKEY = 'https://image.tmdb.org/t/p/w500';

const getPopularList = async () => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US`
  );

  return data;
};

const getMovieDetails = async id => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return data;
};

const getCast = async id => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return data;
};

const getReviews = async id => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  );
  return data;
};

const getFindMovies = async query => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};

export {
  SRCKEY,
  getPopularList,
  getMovieDetails,
  getCast,
  getReviews,
  getFindMovies,
};

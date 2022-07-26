import axios from 'axios';
const KEY = '18ae920eccc30023e44661ce76c3e71c';
const SRCKEY = 'https://image.tmdb.org/t/p/w500';

const getGenresList = async () => {
  const response = await axios(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=uk`
  );
  const genresList = await response.json();

  return genresList;
};

const getPopularList = async () => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=uk`
  );

  return data;
};

const getMovieDetails = async id => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=uk`
  );
  return data;
};

const getCast = async id => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=uk`
  );
  return data;
};

const getReviews = async id => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=uk`
  );
  return data;
};

const getFindMovies = async query => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&language=uk&page=1&include_adult=false`
  );
  return data;
};
export {
  SRCKEY,
  getGenresList,
  getPopularList,
  getMovieDetails,
  getCast,
  getReviews,
  getFindMovies,
};

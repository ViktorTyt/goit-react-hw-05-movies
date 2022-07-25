import axios from 'axios';
const KEY = '18ae920eccc30023e44661ce76c3e71c';

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
export { getGenresList, getPopularList, getMovieDetails };

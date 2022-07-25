import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieDetails } from '../../services/API';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const getInfoAboutMovie = async id => {
    const results = await getMovieDetails(id);
    console.log(results);
    setMovie(results);
  };

  useEffect(() => {
    getInfoAboutMovie(movieId);

    //   return () => {
    //     second
    //   }
  }, [movieId]);

  console.log(movie);
  return (
    <main>
      <div>
        {/* <img src="https://image.tmdb.org/t/p/w500{movie.poster_path}" alt="" /> */}
      </div>
      <div>
        <h1>{movie.title}</h1>
        <p>User score {movie.vote_average * 10} %</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>
          {movie.genres.map(genre => (
            <span>{genre.name} </span>
          ))}
        </p>
      </div>
    </main>
  );
};

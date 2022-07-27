import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Wrapper, Image, Description, Link } from './MovieDetails.styled';

import { SRCKEY, getMovieDetails } from '../../services/API';
import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();

  const getInfoAboutMovie = async id => {
    try {
      const results = await getMovieDetails(id);
      console.log(results);
      setMovie(results);
      setGenres(results.genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfoAboutMovie(movieId);

    //   return () => {
    //     second
    //   }
  }, [movieId]);
  // const genresMarkup = genres.map(({ name }, index) => (
  //   <li key={index + 1}>{name} </li>
  // ));

  const { title, vote_average, overview, poster_path } = movie;
  console.log(genres);
  return (
    <main>
      <section>
        <Wrapper>
          <div>
            <Image src={`${SRCKEY}${poster_path}`} alt={title} loading="lazy" />
          </div>
          <Description>
            <h1>{title}</h1>
            <p>User score {(vote_average * 10).toFixed(2)} %</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map(({ name }, index) => (
                <li key={index + 1}>{name} </li>
              ))}
            </ul>
          </Description>
        </Wrapper>
      </section>
      <div>
        <p>Additianal information</p>
        <ul>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

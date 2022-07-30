import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Wrapper,
  Image,
  Description,
  Genres,
  Link,
  MoreInfoBox,
  MoreInfoTitle,
} from './MovieDetails.styled';

import { SRCKEY, getMovieDetails } from '../../services/API';
import { Outlet } from 'react-router-dom';
import imageNotFound from '../../images/image_not_available.jpg';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const getInfoAboutMovie = async id => {
    try {
      const results = await getMovieDetails(id);
      setMovie(results);
      setGenres(results.genres);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getInfoAboutMovie(movieId);

    //   return () => {
    //     second
    //   }
  }, [movieId]);

  const { title, vote_average, overview, poster_path } = movie;
  return (
    <main>
      <section>
        <Link to={'/movies'}>Go back</Link>
        <Wrapper>
          <Image
            src={poster_path ? `${SRCKEY}${poster_path}` : imageNotFound}
            alt={title}
            loading="lazy"
          />

          <Description>
            <h1>{title}</h1>
            <p>User score: {Math.round(vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <Genres>
              {genres.map(({ name }, index) => (
                <li key={index + 1}>{name} </li>
              ))}
            </Genres>
          </Description>
        </Wrapper>
      </section>
      <MoreInfoBox>
        <MoreInfoTitle>Additianal information</MoreInfoTitle>
        <ul>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </ul>
      </MoreInfoBox>
      <Outlet />
    </main>
  );
};

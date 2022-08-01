import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  Description,
  Genres,
  Image,
  Link,
  MoreInfoBox,
  MoreInfoTitle,
  Wrapper,
  Message,
} from './MovieDetails.styled';

import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import imageNotFound from '../../images/image_not_available.jpg';
import { getMovieDetails, SRCKEY } from '../../services/API';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = location?.state?.from ?? '/';

  useEffect(() => {
    const getInfoAboutMovie = async () => {
      setIsLoading(true);
      try {
        const results = await getMovieDetails(movieId);
        setMovie(results);
        setGenres(results.genres);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getInfoAboutMovie();
  }, [movieId]);

  const { title, vote_average, overview, poster_path } = movie;
  return (
    <main>
      <section>
        {error && (
          <Message>
            {'Movie is not available 😕. Please, try again later'}
          </Message>
        )}
        {isLoading && <Loader />}
        <Link to={goBack}>Go back</Link>
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
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};

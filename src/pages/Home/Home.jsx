import { getPopularList } from '../../services/API';
import { useState, useEffect } from 'react';
import { Link } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [popMovies, setPopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getPopularMovies = async () => {
      try {
        const { results } = await getPopularList();
        setPopMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPopularMovies();
  }, []);

  return (
    <main>
      <h2>Tranding today:</h2>
      {isLoading && <Loader />}
      {error && (
        <p>{'List of cast is not available 😕. Please, try again later'}</p>
      )}
      <ul>
        {popMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

import { getPopularList } from '../../services/API';
import { useState, useEffect } from 'react';
import { Link } from './Home.styled';

export const Home = () => {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const { results } = await getPopularList();
      setPopMovies(results);
    };

    getPopularMovies();
  }, []);

  return (
    <main>
      <h2>Tranding today:</h2>
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

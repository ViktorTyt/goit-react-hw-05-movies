import { getPopularList } from '../../services/API';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [popMovies, setPopMovies] = useState([]);
  const getPopularMovies = async () => {
    const { results } = await getPopularList();
    setPopMovies(results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <main>
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

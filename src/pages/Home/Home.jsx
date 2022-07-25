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
    let controller = new AbortController();
    console.log(controller);
    // let isCancelled = true;
    getPopularMovies();

    return () => {
      controller?.abort();
    };
  }, []);

  // const results = getPopularMovies();
  console.log(popMovies);
  return (
    <main>
      <ul>
        {popMovies.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

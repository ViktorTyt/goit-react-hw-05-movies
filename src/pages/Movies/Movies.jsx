// import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFindMovies } from '../../services/API';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  console.log(query);
  const onChange = value => setQuery(value);

  const getMovies = async query => {
    const { results } = await getFindMovies(query);

    navigate(`/movies/query=${query}`, { replace: false });

    console.log(results);
    setMovies(results);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    getMovies(query);
    setQuery('');
  };

  // useEffect(() => {
  //   getMovies(query);
  // }, [query]);

  return (
    <main>
      <div>
        <form action="" onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={query}
            onChange={({ target: { value } }) => onChange(value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

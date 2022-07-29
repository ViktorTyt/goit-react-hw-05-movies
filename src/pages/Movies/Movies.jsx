import { useEffect, useState } from 'react';
import { getFindMovies } from '../../services/API';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  // const t = useMatch();
  // console.log(t);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  const { pathname } = useLocation();
  console.log(pathname);

  const handleInputChange = value => setQuery(value);

  const getMovies = async query => {
    const { results } = await getFindMovies(query);

    // navigate(`/movies/query=${query}`, { replace: false });

    setMovies(results);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const name = e.target.query.value;

    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    setQuery('');
  };

  useEffect(() => {
    if (movieName === '') return;

    getMovies(movieName);
  }, [movieName]);

  return (
    <main>
      <SearchBar
        query={query}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
      <MoviesList movies={movies} />
    </main>
  );
};

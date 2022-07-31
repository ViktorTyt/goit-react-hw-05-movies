import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFindMovies } from '../../services/API';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const handleInputChange = value => setQuery(value);

  const handleFormSubmit = e => {
    e.preventDefault();
    const name = e.target.query.value;

    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    setQuery('');
  };

  useEffect(() => {
    if (movieName === '') return;

    const getMovies = async query => {
      const { results } = await getFindMovies(query);

      setMovies(results);
    };

    getMovies(movieName);
  }, [movieName]);

  return (
    <main>
      <SearchBar
        query={query}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
      <MoviesList movies={movies} movieName={movieName} />
    </main>
  );
};

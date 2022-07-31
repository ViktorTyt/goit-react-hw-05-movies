import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFindMovies } from '../../services/API';
import { Message } from 'pages/Movies/Movies.styled';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
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

    const getMovies = async () => {
      try {
        const { results } = await getFindMovies(movieName);
        setMovies(results);
      } catch (error) {
        setError(error.message);
      }
    };

    getMovies();
  }, [movieName]);

  return (
    <main>
      <SearchBar
        query={query}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
      {!error ? (
        <MoviesList movies={movies} movieName={movieName} />
      ) : (
        <Message>Server is not available 😕. Please, try again later</Message>
      )}
    </main>
  );
};

import { useFetchPopMovies } from '../../hooks/useFetchPopMovies';
import { Link } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const { popMovies, isLoading, error } = useFetchPopMovies();

  return (
    <main>
      <h2>Tranding today:</h2>
      {isLoading && <Loader />}
      {error && <p>{'Server is not available 😕. Please, try again later'}</p>}
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

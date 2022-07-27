import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const { pathname } = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${pathname}/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

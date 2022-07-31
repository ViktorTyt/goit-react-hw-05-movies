import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Link } from './MoviesList.styled';

export const MoviesList = ({ movies, movieName }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={`${pathname}/${id}`}
              state={{ from: `${pathname}?name=${movieName}` }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  movieName: PropTypes.string.isRequired,
};

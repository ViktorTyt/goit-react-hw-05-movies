// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${pathname}/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

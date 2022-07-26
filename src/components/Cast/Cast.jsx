import { SRCKEY, getCast } from '../../services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const getCastList = async id => {
    try {
      const { cast } = await getCast(id);
      setCast(cast);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getCastList(movieId);
  }, [movieId]);

  return (
    <ul>
      {error && (
        <p>{'List of cast is not available 😕. Please, try again later'}</p>
      )}
      {cast
        .filter(({ order }) => order <= 10)
        .map(({ character, name, profile_path }) => (
          <li>
            <Image src={`${SRCKEY}${profile_path}`} alt={name} />
            {name}
            <p>{character}</p>
          </li>
        ))}
    </ul>
  );
};

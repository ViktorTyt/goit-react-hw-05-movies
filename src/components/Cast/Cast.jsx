import { SRCKEY, getCast } from '../../services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, List, Item } from './Cast.styled';
// import { MdImageNotSupported } from 'react-icons/md';
import imageNotFound from '../../images/not_found.png';

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
    <List>
      {error && (
        <p>{'List of cast is not available 😕. Please, try again later'}</p>
      )}
      {cast
        .filter((_, index) => index <= 11)
        .map(({ id, character, name, profile_path }) => (
          <Item key={id}>
            <Image
              src={profile_path ? `${SRCKEY}${profile_path}` : imageNotFound}
              alt={name}
            />
            <div>
              <h3>{name}</h3>
              <p>{character}</p>
            </div>
          </Item>
        ))}
    </List>
  );
};

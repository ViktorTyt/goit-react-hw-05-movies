import { SRCKEY, getCast } from '../../services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Wrapper,
  Image,
  List,
  Item,
  Title,
  Thumb,
  Role,
  Button,
} from './Cast.styled';
// import { MdImageNotSupported } from 'react-icons/md';
import imageNotFound from '../../images/image_not_available.jpg';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isShowAllCast, setIsShowAllCast] = useState(false);
  const [isShowButton, setIsShowButton] = useState(false);
  const { movieId } = useParams();

  const getCastList = async id => {
    try {
      const { cast } = await getCast(id);
      setCast(cast);
      if (cast.length > 11) {
        setIsShowButton(true);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getCastList(movieId);
  }, [movieId]);

  const handleShowAllCast = () => {
    setIsShowAllCast(true);
    setIsShowButton(false);
  };

  return (
    <Wrapper>
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
              <Thumb>
                <Title>{name}</Title>
                <Role>{character}</Role>
              </Thumb>
            </Item>
          ))}
        {isShowAllCast &&
          cast
            .filter((_, index) => index > 11)
            .map(({ id, character, name, profile_path }) => (
              <Item key={id}>
                <Image
                  src={
                    profile_path ? `${SRCKEY}${profile_path}` : imageNotFound
                  }
                  alt={name}
                />
                <Thumb>
                  <Title>{name}</Title>
                  <Role>{character}</Role>
                </Thumb>
              </Item>
            ))}
      </List>
      {isShowButton && (
        <Button type="button" onClick={handleShowAllCast}>
          Show {cast.length - 12} more actors
        </Button>
      )}
    </Wrapper>
  );
};

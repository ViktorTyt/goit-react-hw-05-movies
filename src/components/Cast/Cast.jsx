import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imageNotFound from '../../images/image_not_available.jpg';
import { getCast, SRCKEY } from '../../services/API';
import {
  Button,
  Image,
  Item,
  List,
  Message,
  Role,
  Thumb,
  Title,
  Wrapper,
} from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowAllCast, setIsShowAllCast] = useState(false);
  const [isShowButton, setIsShowButton] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastList = async id => {
      setIsLoading(true);
      try {
        const { cast } = await getCast(id);
        setCast(cast);
        if (cast.length > 11) {
          setIsShowButton(true);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCastList(movieId);
  }, [movieId]);

  const handleShowAllCast = () => {
    setIsShowAllCast(true);
    setIsShowButton(false);
  };

  return (
    <Wrapper>
      {isLoading && <Loader />}

      {error && (
        <Message>
          {'List of cast is not available 😕. Please, try again later'}
        </Message>
      )}

      <List>
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

      {!isLoading && cast.length === 0 && !error && (
        <Message>{'We don`t have any actors for this movie'}</Message>
      )}
    </Wrapper>
  );
};

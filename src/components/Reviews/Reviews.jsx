import { getReviews } from '../../services/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Wrapper, Item, Title, Message } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviewsList = async () => {
      setIsLoading(true);
      try {
        const res = await getReviews(movieId);
        setReviews(res.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getReviewsList();
  }, [movieId]);

  return (
    <Wrapper>
      {error && (
        <Message>
          List of reviews is not available 😕. Please, try again later
        </Message>
      )}
      {isLoading && <Loader />}
      {reviews.length > 0 &&
        reviews.map(({ author, content }, index) => (
          <Item key={index + 1}>
            <Title>Author: {author}</Title>
            <p>{content}</p>
          </Item>
        ))}
      {reviews.length === 0 && !error && (
        <Message>We don`t have any reviews for this movie</Message>
      )}
    </Wrapper>
  );
};

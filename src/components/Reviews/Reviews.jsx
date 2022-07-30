import { getReviews } from '../../services/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, Item, Title } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const getReviewsList = async id => {
    try {
      const res = await getReviews(id);
      setReviews(res.results);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getReviewsList(movieId);
  }, [movieId]);
  console.log(reviews);
  return (
    <Wrapper>
      {error && (
        <p>{'List of reviews is not available 😕. Please, try again later'}</p>
      )}
      {reviews.map(({ author, content }, index) => (
        <Item key={index + 1}>
          <Title>{author}</Title>
          <p>{content}</p>
        </Item>
      ))}
    </Wrapper>
  );
};

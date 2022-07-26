import { getReviews } from '../../services/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const getReviewsList = async id => {
    try {
      const res = await getReviews(id);
      setReviews(res);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getReviewsList(movieId);
  }, [movieId]);
  console.log(reviews);
  return <h1>reviews</h1>;
};

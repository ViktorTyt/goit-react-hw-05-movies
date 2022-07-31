import { useState, useEffect } from 'react';
import { getPopularList } from 'services/API';

export const useFetchPopMovies = () => {
  const [popMovies, setPopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getPopularMovies = async () => {
      try {
        const { results } = await getPopularList();
        setPopMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPopularMovies();
  }, []);

  return { popMovies, isLoading, error };
};

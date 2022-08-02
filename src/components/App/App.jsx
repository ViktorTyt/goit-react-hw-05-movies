import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';

const SharedLayout = lazy(async () => {
  const module = await import('../SharedLayout/SharedLayout');
  return { default: module.SharedLayout };
});
const Home = lazy(async () => {
  const module = await import('../../pages/Home');
  return { default: module.Home };
});
const Movies = lazy(async () => {
  const module = await import('../../pages/Movies');
  return { default: module.Movies };
});
const MovieDetails = lazy(async () => {
  const module = await import('../../pages/MovieDetails');
  return { default: module.MovieDetails };
});
const Cast = lazy(async () => {
  const module = await import('../Cast');
  return { default: module.Cast };
});
const Reviews = lazy(async () => {
  const module = await import('../Reviews');
  return { default: module.Reviews };
});

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

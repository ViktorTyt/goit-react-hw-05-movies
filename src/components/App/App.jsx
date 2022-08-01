import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { createAsyncComponent } from 'services/createAsyncComponent';
// console.log(createAsyncComponent);

// const SharedLayout = createAsyncComponent('../SharedLayout', 'SharedLayout');
// const Home = createAsyncComponent('../../pages/Home/Home', 'Home');
// const Movies = createAsyncComponent('../../pages/Movies', 'Movies');
// const MovieDetails = createAsyncComponent(
//   '../../pages/MovieDetails/MovieDetails',
//   'MovieDetails'
// );
// const Cast = createAsyncComponent('../Cast/Cast.jsx', 'Cast');
// const Reviews = createAsyncComponent('../Reviews/Reviews.jsx', 'Reviews');

const SharedLayout = lazy(async () => {
  const module = await import('../SharedLayout/SharedLayout');
  return { default: module.SharedLayout };
});
const Home = lazy(async () => {
  const module = await import('../../pages/Home/Home');
  return { default: module.Home };
});
const Movies = lazy(async () => {
  const module = await import('../../pages/Movies/Movies');
  return { default: module.Movies };
});
const MovieDetails = lazy(async () => {
  const module = await import('../../pages/MovieDetails/MovieDetails');
  return { default: module.MovieDetails };
});
const Cast = lazy(async () => {
  const module = await import('../Cast/Cast');
  return { default: module.Cast };
});
const Reviews = lazy(async () => {
  const module = await import('../Reviews/Reviews');
  return { default: module.Reviews };
});

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<Movies />} />
      </Route>
    </Routes>
  );
};

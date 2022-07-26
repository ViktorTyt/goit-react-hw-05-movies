import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          {/* <Link to="/movies/:movieId"></Link> */}
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

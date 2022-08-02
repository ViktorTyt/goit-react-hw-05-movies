import { ErrorMessage, Link } from './NotFoundPage.styled.jsx';

export const NotFoundPage = () => {
  return (
    <ErrorMessage>
      404<br></br> Page not found, please, go to{' '}
      <Link to="/">the Home page</Link>
    </ErrorMessage>
  );
};

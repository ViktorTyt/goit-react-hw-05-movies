import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/theme';

export const ErrorMessage = styled.h2`
  text-align: center;
`;
export const Link = styled(NavLink)`
  color: ${theme.colors.royalBlue};

  :hover {
    text-decoration: underline;
  }
`;

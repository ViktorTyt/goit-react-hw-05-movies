import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: black;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

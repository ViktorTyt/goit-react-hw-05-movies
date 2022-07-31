import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../styles';

export const Link = styled(NavLink)`
  color: black;
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

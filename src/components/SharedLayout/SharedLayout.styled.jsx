import styled from '@emotion/styled';
import { theme } from '../../styles';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  gap: 12px;
  width: 100%;
  padding: 12px 0;
  margin-bottom: ${theme.spacing(6)};
  // border-bottom: 1px solid black;
  background-color: #17080d;
  box-shadow: ${theme.shadows.regular};

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    background-color: ${theme.colors.royalBlue};
  }
`;

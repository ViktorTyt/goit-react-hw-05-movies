import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
`;

export const Image = styled.img`
  height: 400px;
  max-width: 600px;
`;

export const Description = styled.div`
  padding: 24px;
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  flex-direction: column;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

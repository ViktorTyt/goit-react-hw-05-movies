import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: ${theme.shadows.regular};

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const WrapperImage = styled.div`
  @media screen and (min-width: 768px) {
    // width: 500px;
    // height: auto;
  }
`;
export const Image = styled.img`
  height: auto;
  max-width: 100%;

  @media screen and (min-width: 768px) {
      height: auto;
  max-width: 320px;
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

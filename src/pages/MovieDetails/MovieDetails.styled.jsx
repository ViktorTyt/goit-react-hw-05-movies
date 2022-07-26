import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  margin-bottom: ${theme.spacing(5)};
  box-shadow: ${theme.shadows.regular};
  background-color: ${theme.colors.sand};

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    height: 360px;
  }
`;

export const Image = styled.img`
  height: auto;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    height: 100%;
    max-width: 280px;
  }
`;

export const Description = styled.div`
  padding: 24px;
  overflow-y: auto;
`;

export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const MoreInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing(3)};
  background-color: ${theme.colors.sand};
  box-shadow: ${theme.shadows.regular};
  margin-bottom: ${theme.spacing(5)};
`;

export const MoreInfoTitle = styled.h3`
  font-size: ${theme.fontSizes.medium};
  margin-bottom: ${theme.spacing(2)};
`;
export const Link = styled(NavLink)`
  display: inline-flex;
  flex-direction: column;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: ${theme.fontSizes.medium};
  color: black;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: white;
    background-color: ${theme.colors.royalBlue};
  }
`;

export const Message = styled.p`
  font-size: ${theme.fontSizes.medium};
  text-align: center;
`;

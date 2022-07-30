import styled from '@emotion/styled';
import { theme } from '../../styles';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 12px;
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  flex-grow: 1;

  align-items: center;
  // box-shadow: ${theme.shadows.regular};
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: -30px;
  margin-bottom: -30px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 2 - 30px);
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-bottom: 30px;
  border-radius: 4px;
  background-color: ${theme.colors.sand};
  box-shadow: ${theme.shadows.small};

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 4 - 30px);
  }

  @media screen and (min-width: 1024px) {
    flex-basis: calc(100% / 6 - 30px);
  }
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 120px;
  width: auto;
  padding: ${theme.spacing(3)};
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.medium};
  text-align: center;
`;

export const Role = styled.p`
  font-size: ${theme.fontSizes.medium};
  text-align: center;
  // height: 80px;
  overflow-y: auto;
  margin-bottom: 0;
`;

export const Button = styled.button`
  width: 240px;
  height: 36px;
  margin-top: 24px;
  border-radius: 4px;
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.white};
  background-color: ${theme.colors.royalBlue};
`;

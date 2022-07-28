import styled from '@emotion/styled';
import { theme } from '../../styles';

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  // box-shadow: ${theme.shadows.regular};
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -30px;
  margin-bottom: -30px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 2 - 30px);
  // height: 240px;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-bottom: 30px;
  box-shadow: ${theme.shadows.regular};

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 4 - 30px);
  }

  @media screen and (min-width: 1024px) {
    flex-basis: calc(100% / 6 - 30px);
  }
`;

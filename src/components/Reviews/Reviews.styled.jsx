import styled from '@emotion/styled';
import { theme } from '../../styles';

export const Wrapper = styled.ul`
  padding-bottom: 12px;
`;
export const Item = styled.li`
  padding: ${theme.spacing(3)};
  box-shadow: ${theme.shadows.regular};
  background-color: ${theme.colors.sand};
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Title = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.dark};
  font-weight: bold;
`;

export const Message = styled.p`
  font-size: ${theme.fontSizes.medium};
`;

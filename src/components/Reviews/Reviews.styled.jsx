import styled from '@emotion/styled';
import { theme } from '../../styles';

export const Item = styled.li`
  padding: ${theme.spacing(3)};
  box-shadow: ${theme.shadows.medium};

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Title = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.royalBlue};
`;

import styled from '@emotion/styled';
import { theme } from '../../styles';

export const Form = styled.form`
  position: relative;
  display: flex;
  height: 32px;
  width: 272px;
  margin-bottom: 12px;

  > input {
    width: 100%;
    height: 100%;
    font-size: ${theme.fontSizes.medium};
    border-radius: 4px;
    padding: 0 0 0 8px;
    border: 2px solid ${theme.colors.dark};
    transition: border-color ${theme.animation.cubicBezierV1};

    :focus {
      border: 2px solid ${theme.colors.royalBlue};
      outline: none;
    }
  }
`;
export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 72px;
  height: 36px;
  background-color: ${theme.colors.sand};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border-radius: 4px;
  border: 2px solid ${theme.colors.dark};
  transition: ${theme.animation.cubicBezierV2};

  :hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.royalBlue};
  }

  :active {
    border: none;
  }
`;

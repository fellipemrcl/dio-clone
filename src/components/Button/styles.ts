import { css, styled } from "styled-components";
import { IButtonStyles } from "./types";

export const ButtonContainer = styled.button<IButtonStyles>`
  background-color: #565656;
  border-radius: 22px;
  color: #ffff;
  min-width: 120px;
  padding: 2px 12px;
  position: relative;
  width: 100%;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;
      background-color: #e4105d;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &::after {
        content: "";
        border: 1px solid #e4105d;
        border-radius: 22px;
        height: calc(100% + 10px);
        left: -6px;
        position: absolute;
        top: -5px;
        width: calc(100% + 10px);
      }
    `}
`;

import { ReactNode } from "react";
import { css, keyframes, styled } from "styled-components";

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  color?: string;
  size?: string;
  border?: boolean;
  textColor?: string;
  rainbow?: boolean;
}
const effect = keyframes`
   0% {
    background-position: 40% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

const Button = styled.button<ButtonProps>`
  background-color: ${({ color }) =>
    color === "green" ? "#00b078" : color === "black" ? "#000f" : "#9933ff"};
  padding: 8px 16px;
  font-weight: 600;
  width: ${({ size }) =>
    size === "large"
      ? "350px"
      : size === "medium"
      ? "150px"
      : size === "small" && "auto"};
  color: ${(props) => props.textColor || "white"};
  border-radius: 9999px;
  text-align: center;
  border: ${(props) => (props.border ? "2px solid white" : "none")};
  ${(props) =>
    props.rainbow &&
    css`
      background: linear-gradient(
        120deg,
        #0ebefb,
        #ffdd40,
        #ae63e4,
        #47cf73,
        #0ebefb,
        #ffdd40,
        #ae63e4,
        #47cf73
      );
      color: black;
      border: 2px solid black;
      animation: ${effect} 2s linear infinite;
      background-size: 400px;

      /* background-size: 400px;
      animation: rainbow 8s ease-out infinite; */
    `}
`;

const StyledButton = ({ children, color, size, ...props }: ButtonProps) => {
  return (
    <Button color={color} size={size} {...props}>
      {children}
    </Button>
  );
};
export default StyledButton;

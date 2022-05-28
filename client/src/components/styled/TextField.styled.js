import styled from "styled-components";
export const TextField = styled.p`
  color: ${({ color }) => color || "black"};
  font-weight: ${({ weight }) => weight || "regular"};
  font-size: ${({ size }) => `${size}px` || "18px "};
`;

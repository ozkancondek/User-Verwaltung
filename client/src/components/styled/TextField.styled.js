import styled from "styled-components";
export const TextField = styled.p`
  color: ${({ color }) => color || "black"};
  font-weight: ${({ weight }) => weight || "bold"};
  font-size: ${({ size }) => size || "1.5rem "};
  text-decoration: ${({ underline }) => underline || "none "};
  min-width: 30%;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

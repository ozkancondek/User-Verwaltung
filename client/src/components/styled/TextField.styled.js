import styled from "styled-components";
export const TextField = styled.p`
  text-align: center;
  color: ${({ color }) => color || "black"};
  font-weight: ${({ weight }) => weight || "bold"};
  font-size: ${({ size }) => size || "1.5rem "};
  text-decoration: ${({ underline }) => underline || "none "};
  min-width: 30%;
  border-right: ${({ border_r }) => border_r};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => width};
  display: ${({ display }) => display};
  border-radius: 8px;
  border: 2px solid #e7e7e7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 22px;
  font-weight: 700;
  padding: 15px 25px;
  background-color: ${({ bg }) => bg || "  aqua"};
  opacity: 0.9;
  color: ${({ color }) => color || "#131313"};
  margin: 15px;
  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
    background-color: #949a9b;
  }
`;

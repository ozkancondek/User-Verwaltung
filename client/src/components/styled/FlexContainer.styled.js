import styled from "styled-components";

export const FlexContainer = styled.div`
  width: ${({ width }) => width};
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  flex-direction: ${({ direction }) => direction || "column"};
`;

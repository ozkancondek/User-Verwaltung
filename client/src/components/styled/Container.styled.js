import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ bg }) => bg || "white"};
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: 100% 100%;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  flex-direction: ${({ direction }) => direction || "column"};
  margin: auto;
`;

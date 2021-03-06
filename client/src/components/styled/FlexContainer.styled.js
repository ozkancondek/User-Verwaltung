import styled from "styled-components";

export const FlexContainer = styled.div`
  background-color: ${({ bg }) => bg || "white"};
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: ${({ width }) => width || "90%"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "5px"};
  margin: ${({ margin }) => margin || "5px"};
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  flex-direction: ${({ direction }) => direction || "column"};
  margin: auto;
  margin-top: 5px;
  border-radius: ${({ radius }) => radius || "10px"};
  cursor: ${({ cursor }) => cursor};

  &:hover {
    transform: scale(0.98);
  }
`;

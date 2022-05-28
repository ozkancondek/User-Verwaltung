import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: "80px";
  color: ${({ theme, isdark }) =>
    isdark ? theme.text.primary : theme.text.secondary};
  background-color: ${({ theme, isdark }) =>
    isdark ? theme.bg.light : theme.bg.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

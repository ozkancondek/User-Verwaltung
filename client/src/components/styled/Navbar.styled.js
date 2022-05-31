import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${({ extendNavbar }) => (extendNavbar ? "45vh" : "80px")};
  background-color: ${({ theme, isdark }) =>
    isdark ? theme.bg.light : theme.bg.dark};
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.screen.medium_min} {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: ${({ theme, isdark }) =>
    isdark ? theme.text.primary : theme.text.secondary};
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  ${({ theme }) => theme.screen.medium_max} {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: ${({ theme, isdark }) =>
    isdark ? theme.text.primary : theme.text.secondary};
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const LogoContainer = styled.div`
  margin: 10px;
  max-width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme, isdark }) =>
    isdark ? theme.text.primary : theme.text.secondary};
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: ${({ theme, isdark }) =>
    isdark ? theme.text.primary : theme.text.secondary};
  font-size: 45px;
  cursor: pointer;
  ${({ theme }) => theme.screen.medium_min} {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.screen.medium_min} {
    display: none;
  }
`;

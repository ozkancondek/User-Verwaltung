import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
  LogoContainer,
} from "./styled/Navbar.styled";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

import { useTheme } from "../providers/ThemeProvider";

function Navbar() {
  const { panel, isDark, setIsDark } = useTheme();
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar} theme={panel} isdark={isDark}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/" theme={panel} isdark={isDark}>
              Home
            </NavbarLink>
            <NavbarLink to="/users" theme={panel} isdark={isDark}>
              Users
            </NavbarLink>
            <NavbarLink to="/add" theme={panel} isdark={isDark}>
              Add User
            </NavbarLink>

            <NavbarLink to="/about" theme={panel} isdark={isDark}>
              About
            </NavbarLink>
            <OpenLinksButton
              theme={panel}
              isdark={isDark}
              onClick={() => {
                setExtendNavbar((val) => !val);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <LogoContainer
            theme={panel}
            isdark={isDark}
            onClick={() => setIsDark((prev) => !prev)}
          >
            {isDark ? (
              <BsFillSunFill size={50} />
            ) : (
              <MdOutlineDarkMode size={50} />
            )}
          </LogoContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer theme={panel}>
          <NavbarLinkExtended to="/" theme={panel} isdark={isDark}>
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/users" theme={panel} isdark={isDark}>
            Users
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/add" theme={panel} isdark={isDark}>
            Add User
          </NavbarLinkExtended>

          <NavbarLinkExtended to="/about" theme={panel} isdark={isDark}>
            About
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;

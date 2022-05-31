import React from "react";
import { FooterContainer } from "./styled/Footer.styled";
import { useTheme } from "../providers/ThemeProvider";

export const Footer = () => {
  const { panel, isDark } = useTheme();
  return (
    <FooterContainer theme={panel} isdark={isDark}>
      User-Verwaltung Project @2022
    </FooterContainer>
  );
};

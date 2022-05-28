import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import { FooterContainer } from "./styled/Footer.styled";

export const Footer = () => {
  const { panel, isDark } = useTheme();
  return (
    <FooterContainer theme={panel} isdark={isDark}>
      User-Verwaltung Project @2022
    </FooterContainer>
  );
};

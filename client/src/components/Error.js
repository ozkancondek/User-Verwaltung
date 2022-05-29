import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../providers/ThemeProvider";
import { Container } from "./styled/Container.styled";
import { TextField } from "./styled/TextField.styled";

export const Error = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);
  const { isDark, panel } = useTheme();
  return (
    <Container
      bg={isDark ? panel.bg.dark : panel.bg.light}
      width="60%"
      height="60vh"
      direction="row"
      justify="space-evenly"
    >
      <TextField
        border_r={
          isDark
            ? `2px solid ${panel.text.secondary}`
            : `2px solid ${panel.text.primary}`
        }
        color={isDark ? panel.text.secondary : panel.text.primary}
        size="4rem"
      >
        404
      </TextField>
      <TextField
        size="1.2rem"
        color={isDark ? panel.text.secondary : panel.text.primary}
      >
        Something went wrong!!! You are being redirected to the home page.
      </TextField>
    </Container>
  );
};

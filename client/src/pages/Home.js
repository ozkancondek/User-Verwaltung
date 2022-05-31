import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/styled/Button.styled";
import { Container } from "../components/styled/Container.styled";
import { useTheme } from "../providers/ThemeProvider";
import bg_image from "../assets/bg.avif";

export const Home = () => {
  const navigate = useNavigate();
  const { panel } = useTheme();
  return (
    <Container width="100%" height="95vh" img={bg_image}>
      <Button
        width="200px"
        bg={panel.bg.grey}
        onClick={() => navigate("/users")}
      >
        Get Start
      </Button>
    </Container>
  );
};

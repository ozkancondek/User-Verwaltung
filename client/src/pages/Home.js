import React from "react";
import { Button } from "../components/styled/Button.styled";
import bg from "../assets/bg.avif";
import { useTheme } from "../providers/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/styled/Container.styled";

export const Home = () => {
  const navigate = useNavigate();
  const { panel } = useTheme();
  return (
    <Container width="100%" height="95vh" img={bg}>
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

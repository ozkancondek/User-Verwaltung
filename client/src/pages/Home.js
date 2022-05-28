import React from "react";
import { FlexContainer } from "../components/styled/FlexContainer.styled";
import { Button } from "../components/styled/Button.styled";
import bg from "../assets/bg.avif";
import { useTheme } from "../providers/ThemeProvider";

export const Home = () => {
  const { panel } = useTheme();
  return (
    <FlexContainer width="100%" height="95vh" img={bg}>
      <Button width="200px" bg={panel.bg.grey}>
        Get Start
      </Button>
    </FlexContainer>
  );
};

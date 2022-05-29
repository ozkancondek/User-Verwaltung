import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/styled/Container.styled";
import { FlexContainer } from "../components/styled/FlexContainer.styled";
import { TextField } from "../components/styled/TextField.styled";
import { useApi } from "../providers/ApiProvider";
import { useTheme } from "../providers/ThemeProvider";
import bg from "../assets/avatar.jpg";
import gif from "../assets/loader.gif";
import { Gif } from "../components/styled/Gif.styled";

export const User = () => {
  const { panel } = useTheme();
  const params = useParams();
  const [user, setUser] = useState([]);
  const { getSingleUser } = useApi();
  const fetchUser = async () => {
    const res = await getSingleUser(params.id);
    console.log(res);
    setUser(res.UserDetails);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container>
      {user.length === 0 ? (
        <Gif src={gif} width="80px"></Gif>
      ) : (
        <FlexContainer direction="column">
          <TextField
            color={panel.text.tertiary}
            size="2rem"
            underline="underline"
          >
            User Details
          </TextField>
          <Container width="200px" height="200px" img={bg}></Container>
          <FlexContainer
            direction="row"
            width=" 60%"
            height="60px"
            bg="#96b9bb"
          >
            <TextField color={panel.text.tertiary} size="1.4rem">
              FirstName:
            </TextField>
            <TextField color={panel.text.primary} size="1.4rem">
              {user.firstName}
            </TextField>
          </FlexContainer>
          <FlexContainer
            direction="row"
            width=" 60%"
            height="60px"
            bg="#96b9bb"
          >
            <TextField color={panel.text.tertiary} size="1.4rem">
              LastName:
            </TextField>
            <TextField color={panel.text.primary} size="1.4rem">
              {user.lastName}
            </TextField>
          </FlexContainer>
          <FlexContainer
            direction="row"
            width=" 60%"
            height="60px"
            bg="#96b9bb"
          >
            <TextField color={panel.text.tertiary} size="1.4rem">
              Email:
            </TextField>
            <TextField color={panel.text.primary} size="1.4rem">
              {user.email}
            </TextField>
          </FlexContainer>
          <FlexContainer
            direction="row"
            width=" 60%"
            height="60px"
            bg="#96b9bb"
          >
            <TextField color={panel.text.tertiary} size="1.4rem">
              Birth Date:
            </TextField>
            <TextField color={panel.text.primary} size="1.4rem">
              {user.birthDate.slice(0, 10)}
            </TextField>
          </FlexContainer>
        </FlexContainer>
      )}
    </Container>
  );
};

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "../components/styled/Container.styled";
import { FlexContainer } from "../components/styled/FlexContainer.styled";
import { Gif } from "../components/styled/Gif.styled";
import { TextField } from "../components/styled/TextField.styled";
import { useApi } from "../providers/ApiProvider";
import { useTheme } from "../providers/ThemeProvider";
import gif from "../assets/loader.gif";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const navigate = useNavigate();
  const { panel, isDark } = useTheme();
  const { getAllUsers } = useApi();
  const [users, setUsers] = useState([]);

  const fetchUsersList = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.userList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  return (
    <Container
      width="100%"
      bg={() => (isDark ? panel.secondary : panel.primary)}
    >
      <FlexContainer direction="row" justify="space-evenly" bg="#96b9bb">
        <TextField
          color={panel.text.tertiary}
          size="1.5rem"
          underline="underline"
        >
          Firstname
        </TextField>
        <TextField
          color={panel.text.tertiary}
          size="1.5rem"
          underline="underline"
        >
          Lastname
        </TextField>
        <TextField
          color={panel.text.tertiary}
          size="1.5rem"
          underline="underline"
        >
          Email
        </TextField>
      </FlexContainer>
      {users.length === 0 ? (
        <Gif src={gif} width="80px"></Gif>
      ) : (
        users.map((user) => {
          return (
            <FlexContainer
              onClick={() => navigate("/user/" + user._id)}
              key={user.id}
              direction="row"
              justify="space-evenly"
              bg="#96b9bb"
              cursor="pointer"
            >
              <TextField color={panel.text.primary} size="1.3rem">
                {user.firstName}
              </TextField>
              <TextField color={panel.text.primary} size="1.3rem">
                {user.lastName}
              </TextField>
              <TextField color={panel.text.primary} size="1.3rem">
                {user.email}
              </TextField>
            </FlexContainer>
          );
        })
      )}
    </Container>
  );
};

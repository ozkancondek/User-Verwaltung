import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../components/styled/Container.styled";
import { FlexContainer } from "../components/styled/FlexContainer.styled";
import { TextField } from "../components/styled/TextField.styled";
import { useApi } from "../providers/ApiProvider";
import { useTheme } from "../providers/ThemeProvider";
import bg from "../assets/avatar.jpg";
import gif from "../assets/loader.gif";
import { Gif } from "../components/styled/Gif.styled";
import { Button } from "../components/styled/Button.styled";
import { FormComponent } from "../components/FormComponent";
import { Alert } from "antd";

export const User = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { panel, isDark } = useTheme();
  const params = useParams();
  const [user, setUser] = useState([]);
  const [isForm, setIsForm] = useState(false);
  const { getSingleUser, deleteUser } = useApi();

  const fetchUser = async () => {
    const res = await getSingleUser(params.id);
    setUser(res.UserDetails);
  };
  const handleDelete = async () => {
    const res = await deleteUser(params.id);
    setMessage(res);
    setTimeout(() => {
      navigate("/users");
    }, 3000);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {isForm ? (
        <Container width="60%" height="95vh">
          <FormComponent buttonText="Update-User" userInfo={user} />
        </Container>
      ) : (
        <Container
          bg={() => (isDark ? panel.secondary : panel.primary)}
          height="100vh"
        >
          {user.length === 0 ? (
            <Gif src={gif} width="80px"></Gif>
          ) : (
            <FlexContainer direction="column" width="60%">
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
                width=" 80%"
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
                width=" 80%"
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
                width=" 80%"
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
                width=" 80%"
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

              <FlexContainer>
                {message && <Alert message={message} type="success" showIcon />}
              </FlexContainer>
            </FlexContainer>
          )}
          <FlexContainer
            direction="row"
            width=" 80%"
            height="60px"
            bg={isDark ? panel.bg.dark : panel.bg.light}
          >
            <Button
              onClick={() => setIsForm((prev) => !prev)}
              widht="50%"
              bg={panel.bg.blue}
              color={panel.text.secondary}
            >
              Update
            </Button>
            <Button
              widht="50%"
              bg={panel.bg.danger}
              color={panel.text.secondary}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </FlexContainer>
        </Container>
      )}
      )
    </>
  );
};

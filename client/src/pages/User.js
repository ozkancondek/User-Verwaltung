import React from "react";
import { useEffect, useState } from "react";
import { Alert } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../components/styled/Container.styled";
import { FlexContainer } from "../components/styled/FlexContainer.styled";
import { TextField } from "../components/styled/TextField.styled";
import { Gif } from "../components/styled/Gif.styled";
import { Button } from "../components/styled/Button.styled";
import { FormComponent } from "../components/FormComponent";
import { useApi } from "../providers/ApiProvider";
import { useTheme } from "../providers/ThemeProvider";
import bg from "../assets/avatar.jpg";
import gif from "../assets/loader.gif";

export const User = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { panel, isDark } = useTheme();
  const { getSingleUser, deleteUser } = useApi();

  //State for storage response message
  const [message, setMessage] = useState("");

  //State for storage current user
  const [user, setUser] = useState([]);

  //Bool-State for visibility of update form
  const [isForm, setIsForm] = useState(false);

  //State for storing and modifying birthDate data
  const [birth, setBirth] = useState("");

  //function for fetching data with id. Id comes from param
  const fetchUser = async () => {
    const res = await getSingleUser(params.id);
    setUser(res.UserDetails);
    setBirth(res.UserDetails.birthDate.slice(0, 10));
  };

  //function for delete visible user on screen
  const handleDelete = async () => {
    const res = await deleteUser(params.id);
    setMessage(res);

    //forward to users page after 3 seconds
    setTimeout(() => {
      navigate("/users");
    }, 3000);
  };

  //trigger fetch data when component first mounth
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <React.Fragment>
      {/* if user clicks to update button, isForm state will be true and form component will mounth */}
      {isForm ? (
        <Container width="60%" height="95vh">
          {/*  send the button-inner-text and currentUser as prop */}
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
                  {birth}
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
    </React.Fragment>
  );
};

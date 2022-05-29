import React from "react";
import { Container } from "../components/styled/Container.styled";
import { FormComponent } from "../components/FormComponent";

export const AddUser = () => {
  return (
    <Container width="60%" height="95vh">
      <FormComponent buttonText="Add-User" />
    </Container>
  );
};

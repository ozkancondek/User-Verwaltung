import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesContainer } from "../components/styled/RoutesContainer";
import { Home } from "../pages/Home";
import { Users } from "../pages/Users";
import { User } from "../pages/User";
import { About } from "../pages/About";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AddUser } from "../pages/AddUser";

export const Router = () => {
  return (
    <React.Fragment>
      <Navbar />
      <RoutesContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </RoutesContainer>

      <Footer />
    </React.Fragment>
  );
};

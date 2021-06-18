import React from "react";
import Header from "../components/Header/Header";
import Container from "react-bootstrap/Container";
import Product from "../components/Product/Product";
import Todo from "../components/Todo/Todo";

function HomePages(props) {
  return (
    <Container>
      <Header />

      <Todo />
    </Container>
  );
}

export default HomePages;

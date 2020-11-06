import React from "react";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Container>
  );
}

export default App;

import React from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch } from "react-router-dom";
import HomePage from './home/HomePage';

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Container>
  );
}

export default App;

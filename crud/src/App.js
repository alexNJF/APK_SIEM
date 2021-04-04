import logo from "./logo.svg";
import React, { useState } from 'react';
import { Grid } from "./components";
import { Login } from "./pages/login";
import useToken from './Auth/useToken';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
            <Grid />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

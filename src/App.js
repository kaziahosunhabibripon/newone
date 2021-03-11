import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Error from "./Component/Error/Error";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Component/Header/Header";
import Team from "./Component/Team/Team";
import Body from "./Component/Body/Body";
import Detail from "./Component/Detail/Detail";




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Body/>
          </Route>
          <Route path="/home">
            <Body/>
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/detail/:idTeam">
            <Detail/>
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

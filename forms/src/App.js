import './App.css';
import React, { Component } from 'react';
import PBDetails from './components/Form.jsx';
import Header from './components/Header.jsx';
import BankDetails from './components/BankDetails.jsx';
import Address from './components/Address.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      {/* <Route exact path="/" component={Header} /> */}
      <Router>
        <div>
          <Header></Header>
        </div>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <PBDetails></PBDetails>
            </Route>
            <Route path="/BankDetails">
              <BankDetails></BankDetails>
            </Route>
            <Route exact path="/Address">
              <Address></Address>
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  )
}

export default App;

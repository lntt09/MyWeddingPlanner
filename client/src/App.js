import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FrontPage from './components/FrontPage/FrontPage';
import Header from "./components/Static/Header"
import ShowPlanner from "./components/Planner/ShowPlanner"
import EditPlanner from "./components/Planner/EditPlanner"
import NewPlanner from "./components/Planner/NewPlanner"

import './App.css';

function App() {
  return (
    <Router>


      <div className="App">

        <div className="topnav">
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/planner/create" component={NewPlanner} />
          <Route exact path="/planner/:plannerId" component={ShowPlanner} />
          <Route exact path="/planner/:plannerId/edit" component={EditPlanner} />
          
        </Switch>
        

      </div>
    </Router>
  )
}



export default App;

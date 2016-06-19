/// <reference path="../typings/tsd.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"

import {Header } from "./components/header.tsx"
import {Footer } from "./components/footer.tsx"
import {Home } from "./components/Home.tsx"
import {About } from "./components/About.tsx"
import {Layout } from "./components/Layout.tsx"
import {Restaurants } from "./components/Restaurants.tsx"


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/Restaurants" component={Restaurants}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
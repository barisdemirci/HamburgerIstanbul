import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"

import {Header } from "./header.tsx"
import {Footer } from "./footer.tsx"
import {Home } from "./Home.tsx"
import {About } from "./About.tsx"
import {Layout } from "./Layout.tsx"


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
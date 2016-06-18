import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"


export class Layout extends React.Component<{}, {}> {
    render() {
        return (
          <div>
            <h1>React Router Tutorial</h1>
            <ul role="nav">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/repos">Repos</Link></li>
            </ul>
            {this.props.children}
          </div>
        );
    }
}

export class Repos extends React.Component<{}, {}> {
    render() {
        return (
          <div>
           Repos
          </div>
        );
    }
}
export class About extends React.Component<{}, {}> {
    render() {
        return (
          <div>
           About
          </div>
        );
    }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    <IndexRoute component={About}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
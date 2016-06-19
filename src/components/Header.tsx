import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"

export class Header extends React.Component<{}, {}>{
  render() {
    return (
      <header>
        <div className="container">


          <div className="logo">
            <a href="index.html">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>



          <div className="nav-menu">


            <div className="burger-menu"><i className="fa fa-bars"></i></div>





            <ul>
              <li className="current-menu">
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Home">Top 5</Link>
              </li>
              <li>
                <Link to="/Home">Blog</Link>
              </li>
              <li>
                <Link to="/Restaurants">Restaurantlar</Link>

              </li>
              <li>
                <Link to="/About">Hakkimizda</Link>
              </li>
              <li>
                <Link to="/Home">Iletisim</Link>
              </li>
            </ul>


          </div>


        </div>
      </header>

    );
  }
}
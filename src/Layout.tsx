import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"

import {Footer} from "./Footer.tsx"
import {Header} from "./Header.tsx"

export class Layout extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <div className="preloader-container">
          <div className="preloader-particles-wrapper"></div>
        </div>
        <div className="bgimage bgimage-cover" data-image-src="http://www.hamburger-paris.com/template/skins/personnalise/hamburger_paris/images/skin_fond.jpg">
          <div className="bg-overlay" data-bg-color="#429053" data-opacity="0.25"></div>
        </div>
        <div className="container-wrapper">
          <Header/>
          <div className="content-wrapper">
           
              {this.props.children}
            
          </div>

          <Footer/>

          <a className="back-to-top" href="#"><i className="fa fa-angle-up"></i></a>


        </div>

      </div>
    );
  }
}
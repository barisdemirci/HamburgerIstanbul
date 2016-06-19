/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"

export class SideBar extends React.Component<{},{}>{
    render(){
    return(
        <div className="col-md-4 sidebar-section-body sidebar-sticky">
            <div className="box">


              <aside className="widget widget_about_us">
                <div className="widget-title">
                  <h3>Hakkimizda</h3>
                </div>
                <div className="widget-detail">
                  <div className="widget-about-img img-div-cover">
                    <img src="http://www.burgerlab.co/img/burgerlab-lab-burger.jpg" alt="about me" />
                  </div>
                  <div className="widget-about-detail">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut mauris magna, lacinia
                      ac purus quis, rutrum bibendum leo.Nullam sit amet nibh eu odio ornare.</p>
                    <div className="widget-about-social">
                      <ul>
                        <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-google"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-pinterest-p"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>



              <aside className="widget widget_recent_post">
                <div className="widget-title">
                  <h3>Top 5 Burger</h3>
                </div>
                <div className="widget-detail">


                  <div className="recent-wrap">
                    <div className="recent-post-thumb">
                      <a href="#">
                        <figure>
                          <div className="overlay-hover"></div>
                          <img src="images/upload/recent-post01.jpg" alt="recent post" />
                        </figure>
                      </a>
                    </div>
                    <div className="recent-post-detail">
                      <h4>Lorem ipsum dolor dictum consectetur elit amet</h4>
                      <a href="#">Read more</a>
                    </div>
                  </div>



                  <div className="recent-wrap">
                    <div className="recent-post-thumb">
                      <a href="#">
                        <figure>
                          <div className="overlay-hover"></div>
                          <img src="images/upload/recent-post02.jpg" alt="recent post" />
                        </figure>
                      </a>
                    </div>
                    <div className="recent-post-detail">
                      <h4>Lorem ipsum dolor dictum consectetur elit amet</h4>
                      <a href="#">Read more</a>
                    </div>
                  </div>



                  <div className="recent-wrap">
                    <div className="recent-post-thumb">
                      <a href="#">
                        <figure>
                          <div className="overlay-hover"></div>
                          <img src="images/upload/recent-post03.jpg" alt="recent post" />
                        </figure>
                      </a>
                    </div>
                    <div className="recent-post-detail">
                      <h4>Lorem ipsum dolor dictum consectetur elit amet</h4>
                      <a href="#">Read more</a>
                    </div>
                  </div>



                  <div className="recent-wrap">
                    <div className="recent-post-thumb">
                      <a href="#">
                        <figure>
                          <div className="overlay-hover"></div>
                          <img src="images/upload/recent-post04.jpg" alt="recent post" />
                        </figure>
                      </a>
                    </div>
                    <div className="recent-post-detail">
                      <h4>Lorem ipsum dolor dictum consectetur elit amet</h4>
                      <a href="#">Read more</a>
                    </div>
                  </div>


                </div>
              </aside>







            </div>
          </div>
  ); 

  
}
}
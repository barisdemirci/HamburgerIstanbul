import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"

export class Footer extends React.Component<{}, {}>{
  render() {
    return (<footer className="footer-section">
      <div className="container">
        <div className="footer-wrapper">



          <div className="footer-details">
            <div className="row">


              <div className="col-md-4">
                <div className="box">
                  <aside className="widget widget_about_us">
                    <div className="widget-detail">
                      <div className="widget-about-img img-div-cover">
                        <img src="images/footer-logo.png" alt="logo" />
                      </div>
                      <div className="widget-about-detail">
                        <p>Vestibulum ante ipsum primis in faucibus luctus et ultrices posuere cubilia
                          curae aliquam dignissim viverra dolor sit condimentum aenean sollicitudin
                          justo eu pulvinar rutrum.</p>
                        <div className="widget-about-social">
                          <ul>
                            <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fa fa-google"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fa fa-pinterest-p"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>



              <div className="col-md-4">
                <div className="box">
                  <aside className="widget widget_tag_cloud">
                    <div className="widget-title">
                      <h3>Popular tags</h3>
                    </div>
                    <div className="widget-detail">
                      <div className="tagcloud">
                        <a href="#">semper<span>(5) </span></a>
                        <a href="#">risus<span>(6) </span></a>
                        <a href="#">ullamcorper<span>(7) </span></a>
                        <a href="#">condimentum<span>(5) </span></a>
                        <a href="#">condimentum<span>(3) </span></a>
                        <a href="#">semper<span>(5) </span></a>
                        <a href="#">risus<span>(6) </span></a>
                        <a href="#">ullamcorper<span>(7) </span></a>
                        <a href="#">condimentum<span>(5) </span></a>
                        <a href="#">condimentum<span>(3) </span></a>
                        <a href="#">semper<span>(5) </span></a>
                        <a href="#">risus<span>(6) </span></a>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>



              <div className="col-md-4">
                <div className="box">
                  <aside className="widget widget_follow_subscribe">
                    <div className="widget-title">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="widget-detail">
                      <p>Aenean et tortor vitae diam cursus ornare sit amet nec mi.In tempor libero nec.</p>
                      <div data-height="15"></div>
                      <form className="subscribe">
                        <input className="subscribe-email" type="text" name="email" placeholder="Your email address..." required />
                        <input className="subscribe-button" type="submit" value="Subscribe" />
                      </form>
                    </div>
                  </aside>
                </div>
              </div>


            </div>
          </div>




          <div className="footer-bottom">
            <div className="row">
              <div className="col-md-6">
                <div className="bottom-text-left">
                  Copyrights © 2015 <a href="#">Libra</a>.All Rights Reserved.
                </div>
              </div>
              <div className="col-md-6">
                <div className="bottom-text-right">
                  Lorem ipsum dolor sit consectetur dictum dolor euismod.
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </footer>

    );
  }
}

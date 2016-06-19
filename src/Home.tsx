import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"


export class Home extends React.Component<{}, {}>{
  render() {
    return (
      <div className="container">
        <div className="home-carousel-slide">
          <div className="owl-carousel home-carousel">


            <div className="carousel-item">
              <a href="#">
                <div className="carousel-title">
                  <h3>Top 10</h3>
                </div>
                <figure className="img-div-cover">
                  <img src="http://www.hamburger-paris.com/images/upload/113/photos/2014/01/03/meilleur_burger_paris-7165.jpg" style={{ height: 230 + 'px !important' }}
                    alt="home carousel" />
                </figure>
              </a>
            </div>



            <div className="carousel-item">
              <a href="#">
                <div className="carousel-title">
                  <h3>Highlight Story</h3>
                </div>
                <figure className="img-div-cover">
                  <img src="https://jamesvsburger.files.wordpress.com/2014/06/img_4783mono.jpg" alt="home carousel" style={{ height: 230 + 'px !important' }}
                    />
                </figure>
              </a>
            </div>



            <div className="carousel-item">
              <a href="#">
                <div className="carousel-title">
                  <h3>My inspiration</h3>
                </div>
                <figure className="img-div-cover">
                  <img src="http://chilledmagazine.com/wp-content/uploads/2013/10/BeerBurgers-feat.jpg" style={{ height: 230 + 'px !important' }} alt="home carousel"
                    />
                </figure>
              </a>
            </div>



          </div>


        </div>


        <div className="layout-divider"></div>

        <div className="row section-wrapper">


          <div className="col-md-8 content-section-body">
            <div className="box">

              <div className="post-list">


                <article className="post-type-standard">


                  <div className="post-img img-div-cover">
                    <div className="post-list-category">
                      <ul>
                        <li><a href="#">Vestibulum</a></li>
                        <li><a href="#">Aenean</a></li>
                      </ul>
                    </div>
                    <a href="#">
                      <figure>
                        <div className="overlay-hover"></div>
                        <img src="http://www.hamburger-paris.com/images/upload/113/photos/2013/11/28/trouvez_un_resurant_hamburger_paris-8054.jpg"
                          alt="post image" />
                      </figure>
                    </a>
                  </div>


                  <div className="post-entry">
                    <h2><a href="#">Donec tellus faucibus lobortis</a></h2>
                    <div className="post-description">
                      <p>Nullam fringilla erat ut nulla volutpat, eget tempor leo sagittis vestibulum
                        sodales luctus nunc mauris a malesuada et lobortis leo hendrerit sed.Sed
                        id ultrices mauris, at suscipit lectus.Praesent non luctus tellus.Etiam
                        cursus non sapien vel facilisis.</p>
                    </div>
                    <div className="post-meta">
                      <ul>
                        <li><a href="#">12 October 2015</a></li>
                        <li><a href="#">John Doe</a></li>
                        <li><a href="#">Comments<span>4</span></a></li>
                      </ul>
                    </div>
                  </div>


                  <div className="post-share">
                    <div className="read-more-btn"><a href="#">Read more</a></div>
                    <div className="share-btn">Share</div>
                    <ul className="share-standard">
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google"></i></a></li>
                      <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>

                </article>



              </div>



            </div>
          </div>



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


        </div>

        <div className="layout-divider"></div>
      </div>
    );
  }
}

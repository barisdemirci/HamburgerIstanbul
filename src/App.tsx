import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"


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
                <Link to="/Home">Restaurantlar</Link>

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

export class About extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        About
      </div>
    );
  }
}

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

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
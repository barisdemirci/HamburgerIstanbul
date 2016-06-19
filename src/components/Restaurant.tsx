/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"


export interface RestaurantState{
    name:string;
    logoUrl:string;
    address:string;
    phone:string;
    webSite:string;

}
export class Restaurant extends React.Component<RestaurantState,{}>{
    render(){
        return(
                       <article className="post-blog-list">
                       
                                    <div className="blog-list-box">
                                    
                                        <div className="blog-list-img">
                                            <a href="#">
                                                <figure className="fit-img">
                                                    <div className="overlay-hover"></div>
                                                    <img src={this.props.logoUrl} alt="blog list image" />
                                                </figure>
                                            </a>
                                        </div>
                                        
                                        <div className="post-entry">
                                            <div className="blog-list-details">
                                                <h2><a href="#">{this.props.name}</a></h2>
                                                <div className="post-description">
                                                    <p>{this.props.address}</p>
                                                </div>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><a href="#">{this.props.phone}</a></li>
                                                        <li><a href="#">{this.props.webSite}</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="blog-list-share share-tooltip-animate">
                                                <i className="fa fa-share-alt"></i>
                                            </div>
                                            <div className="share-tooltip">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
        );
    }
}
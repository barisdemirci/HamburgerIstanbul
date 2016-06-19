/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"

import {SideBar} from "./SideBar.tsx"
import {Restaurant, RestaurantState} from "./Restaurant.tsx"

interface RestaurantsProp{
    data:Array<RestaurantState>
}

export class Restaurants extends React.Component<{}, RestaurantsProp>{
 /**
  *
  */
 constructor() {
     super();
     this.state={ data:[] };
 }

  fetchComments() {
    $.ajax({
      url: "http://localhost:2985/api/companies",
      dataType: 'json',
      cache: false,
      success: (data) =>{
      this.setState({ data: data });
    },
      error: (xhr, status, err) => console.error(status, err)
    })
  }
   componentDidMount() {
    this.fetchComments();
  } 
  render() {

  var RestNodes = this.state.data.map(item=> <Restaurant key={item.Id} Id={item.Id} Name={item.Name} LogoUrl={item.LogoUrl} Address={item.Address} Phone={item.Phone} WebSite={item.WebSite} />);

    return (

    <div className="container">
 
        <div className="row section-wrapper">


          <div className="col-md-8 content-section-body">
           <div className="box">
                            
                            <div className="archive-title">
                                <h1>Restaurantlar</h1>
                            </div>
                            
                            <div className="post-list">
                          
                            {RestNodes}
                              
                            </div>
                          
                            
                        </div>
          </div>



          <SideBar/>


        </div>

        <div className="layout-divider"></div>
      </div>
    );
  }
}


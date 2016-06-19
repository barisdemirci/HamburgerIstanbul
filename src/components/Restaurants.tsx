/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory, Router, Route, IndexRoute, Link, hashHistory} from "react-router"

import {SideBar} from "./SideBar.tsx"
import {Restaurant, RestaurantState} from "./Restaurant.tsx"

export interface RestaurantsProp{
    data:Array<RestaurantState>
}

export class Restaurants extends React.Component<{}, Array<RestaurantState>>{
 /**
  *
  */
 constructor() {
     super();
        
 }
  /*componentDidMount() {
    $.ajax({
      url: "http://localhost:2985/api/companies",
      dataType: 'json',
      cache: false
    }).done((result)=>{
        this.state=result;
    }).fail((data)=>{console.log(data);});
  }*/
  render() {

    
        
  /*  var RestNodes = this.state.map((item)=> {
        return ( <Restaurant name={item.name} logoUrl={item.logoUrl} address={item.address} phone={item.phone} webSite={item.webSite} />);
    });
*/
    return (
    <div className="container">
 
        <div className="row section-wrapper">


          <div className="col-md-8 content-section-body">
           <div className="box">
                            
                            <div className="archive-title">
                                <h1>Restaurantlar</h1>
                            </div>
                            
                            <div className="post-list">
                          

                              
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


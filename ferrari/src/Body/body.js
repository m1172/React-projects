import React, { Component } from "react";
import "./body.css";

export default class body extends Component {
    render(){
        return(
         <div className="body">
            <div className="inputs">
                <div className="input">
                <i className="fa fa-search "></i>
                <input type="text" placeholder="           Search for a race, car or racer"/>
                <select name="" id="sel">
                    <option class="op" value="">Choose a car </option>
                </select>
                <i className="far fa-bell "><sup></sup></i>
                <i className="fa fa-user"></i>
               </div>
           </div>
          </div>
        );
    }
}
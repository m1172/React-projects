import React, { Component } from "react";
import './sidebar.css'

export default class sidebar extends Component {
    render(){
        return(
         <div className="sidebar">
            <div className="menu">
                <h3><i   className="fa fa-square "></i> iffee</h3>

                <h5 className="h4">Menu</h5>
                <h5><i className="fas fa-home"></i>Menu</h5>
                <h5><i className="fas fa-warehouse"></i>Garage</h5>
                <h5><i className="fas fa-archway"></i>Service menu</h5>
                <h5><i className="fas fa-user-friends"></i>Racer</h5>
                <h5><i className="fas fa-calculator"></i> Calculator</h5>
                <h5><i className="fas fa-cog"></i>Settings</h5>

                <h5 className="h4">Sceduled Races</h5>
                <h5><i  class="far fa-circle"> </i>MotoGP</h5>
                <h5><i  class="far fa-circle"></i>Dynamics 22</h5>
                <h5><i     class="far fa-circle"></i>Olympics</h5>
            </div>
         </div>
        );
    }
}
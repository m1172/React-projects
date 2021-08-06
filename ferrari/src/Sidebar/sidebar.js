import React, { Component } from "react";
import home from '../assets/home.png'
import './sidebar.css'

export default class sidebar extends Component {
    render(){
        return(
         <div className="sidebar">
            <div className="menu">
                <h3> iffee</h3>
                <h5 className="h4">Menu</h5>
                <h4><img src={home}/>Menu</h4>
                <h5>Garage</h5>
                <h5>Service menu</h5>
                <h5>Racer</h5>
                <h5> Calculator</h5>
                <h5>Settings</h5>

                <h5 className="h4">Sceduled Races</h5>
                <h5>MotoGP</h5>
                <h5>Dynamics 22</h5>
                <h5>Olympics</h5>
            </div>
         </div>
        );
    }
}
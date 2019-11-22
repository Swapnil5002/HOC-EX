import React, { Component } from 'react'
import Army from './army.js'
import image from "./assets/soldier.png"
import './armymenone.css'

class Armymenone extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

 

    render() {
        return (
            <div className="one-cotainer">
                <h2 className="camp-title">Camp: {this.props.camp}</h2>
                <h3 className="function-handler">
                   Armymenone {this.props.gunName} 
                   gunshots : {this.props.hocGunshots}
                </h3>
                   {this.props.Image && <img src={image} alt="Soldier"/>}
            </div>
        )
    }
}

export default Army(Armymenone, 10);
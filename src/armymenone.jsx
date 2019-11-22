import React, { Component } from 'react'
import Army from './army.js'
import './armymenone.css'

class Armymenone extends Component {
    render() {
        console.log(this.props.showImage)
        return (
            <div className="one-cotainer">
                <h2 className="camp-title">Camp: {this.props.camp}</h2>
                <h3 className="function-handler" onMouseOver={this.props.hocHandlegunshots}>
                   Armymenone {this.props.gunName} 
                   gunshots : {this.props.hocGunshots}</h3>
                <img className="army-image" src={this.props.showImage} onMouseOver={this.props.showImage} />
            </div>
        )
    }
}

export default Army(Armymenone, 10);
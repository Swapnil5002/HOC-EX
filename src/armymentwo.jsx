import React, { Component } from 'react'
import Army from './army.js'

class Armymentwo extends Component {
    render() {
        return (
            <div className="two-container">
                <h2 className="camp-title">Camp: {this.props.camp}</h2>
                <h3 className="function-handlers" onMouseOver={this.props.hocHandlegunshots}>
                   Armymentwo {this.props.gunName} 
                   gunshots : {this.props.hocGunshots}</h3>
                   <img className="army-image" src={this.props.showImage} onMouseOver={this.props.showImage} />
                
            </div>
        )
    }
}

export default Army(Armymentwo,5);
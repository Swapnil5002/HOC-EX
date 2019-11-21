import React, { Component } from 'react'
import Army from './army.js'

class Armymenone extends Component {
    render() {
        return (
            <div>
                <h2>Camp: {this.props.camp}</h2>
               <h3 onMouseOver={this.props.hocHandlegunshots}>Armymenone {this.props.gunName} gunshots : {this.props.hocGunshots}</h3>
            </div>
        )
    }
}

export default Army(Armymenone, 10);
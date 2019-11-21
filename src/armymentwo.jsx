import React, { Component } from 'react'
import Army from './army.js'

class Armymentwo extends Component {
    render() {
        return (
            <div>
                <h2>Camp: {this.props.camp}</h2>
               <h3 onMouseOver={this.props.hocHandlegunshots}>Armymentwo {this.props.gunName} gunshots : {this.props.hocGunshots}</h3>
            </div>
        )
    }
}

export default Army(Armymentwo,5);
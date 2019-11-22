import React, { Component } from 'react'
import SoldierImg from './assets/soldier.png'

const Army = (Men, shot) => {
    class NewMen extends Component {
        constructor(props) {
            super(props);
            this.state = {
                    gunShots: 0,
                    image: SoldierImg
            }
        }

        handleMouseOver = () => {
            this.setState({
                gunShots: this.state.gunShots + shot
            })
        }

        handleImage = () => {
            this.setState({
                image: this.state.image
            })
        }

        render() {
            return (
                <div>
                    <Men 
                    gunName="AK47" 
                    hocHandlegunshots={this.handleMouseOver}
                    hocGunshots={this.state.gunShots}
                    showImage={this.handleImage ? this.state.image: ""}
                    {...this.props}
                    />
                </div>
            )
        }
    }
    return NewMen;
}

export default Army


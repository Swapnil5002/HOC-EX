import React, { Component } from 'react'
import image from './assets/soldier.png'
import './army.css'
import bullsEye from './assets/bullsEye.png'
import { tsImportEqualsDeclaration } from '@babel/types'

const Army = (Men, shot) => {
    class NewMen extends Component {
        constructor(props) {
            super(props);
            this.state = {
                    gunShots: 50,
                    showImage: false,
                    score: 0
            }
            this.handleMouseoverEvents = this.handleMouseoverEvents.bind(this);
            this.handleReload = this.handleReload.bind(this);
            this.handleMouseClick = this.handleMouseClick.bind(this);
        }

        handleReload() {
            this.setState((prevstate) => ({
                score: prevstate.score,
                gunShots: 50
            }))
        }


        handleMouseoverEvents() {
            this.setState({
                showImage: !this.state.showImage,
           })
            this.hocHandlegunshots();
        }

        handleMouseClick = () => {
            if(this.state.gunShots != 0) {
                this.setState({
                    gunShots: this.state.gunShots - shot,
                    score: this.state.score + 1
                })
            }
        }

    

        render() {
            return (
                <div>
                    <Men 
                        gunName="AK47" 
                        // hocHandlegunshots={this.handleMouseOver}
                        hocGunshots={this.state.gunShots}
                        Image={this.state.showImage && <img className="army-image" src={image} alt="Soldier" />}
                        {...this.props}
                    />
                    <h3>Score: {this.state.score}</h3>
                    <img src={bullsEye} alt="bullseye" className="bull-image" text="Shoot here" onClick={this.handleMouseClick}/>
                    <div className="reload">
                        <a href="" onClick={this.handleReload} className="reload-button">RELOAD</a>
                    </div>
                </div>
            )
        }
    }
    return NewMen;
}

export default Army


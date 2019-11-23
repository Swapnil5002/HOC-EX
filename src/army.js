import React, { Component } from 'react'
import image from './assets/soldier.png'
import './army.css'
import bullsEye from './assets/bullsEye.png'

const Army = (Men, shot) => {
    class NewMen extends Component {
        constructor(props) {
            super(props);
            this.state = {
                    gunShots: 50,
                    showImage: false,
                    score: 0,
                    soldierImage: false
            }


            this.handleMouseoverEvents = this.handleMouseoverEvents.bind(this);
            this.handleReload = this.handleReload.bind(this);
            this.handleMouseClick = this.handleMouseClick.bind(this);
            this.handleinitialMessage = this.handleinitialMessage.bind(this)
            this.handleShooting = this.handleShooting.bind(this)
        }

        handleShooting() {
            
        }

        handleinitialMessage() {
                this.setState({
                    bullseyeImage: true
                })
        }

        handleReload(e) {
            e.preventDefault();
            this.setState({
                gunShots: 50
            })
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
                    score: this.state.score + 1,
                    soldierImage: true
                })
            }
        }

        render() {
            return (
                <div className="men">
                    <Men 
                        gunName="AK47" 
                        hocGunshots={this.state.gunShots}
                        Image={this.state.showImage && <img className="army-image" src={image} alt="Soldier" />}
                        {...this.props}
                    />
                        <h3>Score: {this.state.score}</h3>
                        <img src={bullsEye} alt="bullseye" className="bull-image" text="Shoot here" onClick={this.handleMouseClick}/>
                    <div className="reload">
                        <a href="" onClick={this.handleReload} className="reload-button">RELOAD</a>
                    </div>
                    <div className="button-control">
                         <a className="button" href="" onClick={this.handleOnClick}>End Shooting</a>
                    </div>
                    <div className="initial-message">
                        {this.state.score === 0 ? <a href="" className="shooting" onClick={this.handleShooting}>Start shooting</a>: this.state.soldierImage ?<img src={image} alt="" className="image"/>: "Miss" }
                    </div>
                </div>
            )
        } 
    }
    return NewMen;
}

export default Army


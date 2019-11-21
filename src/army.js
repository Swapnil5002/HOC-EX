import React, { Component } from 'react'

const Army = (Men, shot) => {
    class NewMen extends Component {
        constructor(props) {
            super(props);
            this.state = {
                    gunShots: 0
            }
        }

        handleMouseOver = () => {
            this.setState({
                gunShots: this.state.gunShots + shot
            })
        }

        render() {
            console.log(this.props.camp)
            return (
                <div>
                    <Men 
                    gunName="AK47" 
                    hocHandlegunshots={this.handleMouseOver}
                    hocGunshots={this.state.gunShots}
                    {...this.props}
                    />
                </div>
            )
        }
    }
    return NewMen;
}

export default Army


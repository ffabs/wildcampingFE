import React, { Component } from 'react';
import '../App.css';
import './Icon.css';

class Icon extends Component {

    render() {        
        
        return (

            <div>
                {this.props.icon === "fire" &&
                    <div className="icon">🔥</div>     
                }
                {this.props.icon === "water" &&
                    <div className="icon">🚰</div>
                }   
                {this.props.icon === "stars" &&
                    <div className="icon">✨</div>
                }       
            </div>

        )

    }

}


export default Icon;
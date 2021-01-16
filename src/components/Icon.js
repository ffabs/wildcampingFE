import React, { Component } from 'react';
import '../App.css';
import './Icon.css';

class Icon extends Component {

    render() {    
        let detailsCss = 'hide';
        if (this.props.details === "yes") {
            detailsCss = 'details';
        }   
        
        return (

            <div>
                {this.props.icon === "fire" &&
                    <div className="icon-section"> 
                        <div className="icon">🔥</div> 
                        <div className={detailsCss}>Fireplace allowed</div>   
                    </div>
                }
                {this.props.icon === "water" &&
                    <div className="icon-section"> 
                        <div className="icon">🚰</div> 
                        <div className={detailsCss}>Drinkable water available</div>   
                    </div>
                }   
                {this.props.icon === "stars" &&
                    <div className="icon-section"> 
                        <div className="icon">✨</div> 
                        <div className={detailsCss}>No light pollution</div>   
                    </div>
                }       
            </div>

        )

    }

}


export default Icon;
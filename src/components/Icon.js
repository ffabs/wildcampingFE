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
                {this.props.icon === "toilet" &&
                    <div className="icon-section"> 
                        <div className="icon">🚽</div> 
                        <div className={detailsCss}>Toilet available</div>   
                    </div>
                } 
                {this.props.icon === "naturalPark" &&
                    <div className="icon-section"> 
                        <div className="icon">🏞️</div> 
                        <div className={detailsCss}>In a natural park</div>   
                    </div>
                }     
                {this.props.icon === "legal" &&
                    <div className="icon-section"> 
                        <div className="icon">👮</div> 
                        <div className={detailsCss}>An official legal place to camp</div>   
                    </div>
                }
                {/* {this.props.icon === "bike" &&
                    <div className="icon-section"> 
                        <div className="icon">🚵‍♂️</div> 
                        <div className={detailsCss}>Accessible by bike</div>   
                    </div>
                }
                {this.props.icon === "walk" &&
                    <div className="icon-section"> 
                        <div className="icon">🚶</div> 
                        <div className={detailsCss}>Accessible on foot</div>   
                    </div>
                } */}
            </div>

        )

    }

}


export default Icon;
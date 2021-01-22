import React, { Component } from 'react';
import homeBackground from '../images/home-background.png';
import Icon from './Icon';
import '../App.css';
import './CampingPreview.css';
import {Link} from 'react-router-dom';
import Data from '../camping-data.json';


class CampingPreview extends Component {
  
  render() {

    let name = Data[this.props.campingId]["name"]; 
    let price = Data[this.props.campingId]["price"]; 
    let bookingRequired = Data[this.props.campingId]["bookingRequired"];
    let image = Data[this.props.campingId]["pictures"]["pic1"];

    return (
      <div className="camping-preview">
          <img src={image} className="camping-preview-image" alt="wild-camping" />
          <div className="camping-preview-text">
              <div className="camping-preview-title">{name}</div>
              <div className="camping-preview-priceandbooking">
                  <div className="camping-preview-price">€ {price}</div>
                  { bookingRequired === true &&
                    <div className="camping-preview-booking">Booking required</div>
                  }
              </div>
              <div className="camping-preview-icons">
                  <Icon icon="fire" details="no"/>
                  <Icon icon="water" details="no"/>
                  <Icon icon="stars" details="no"/>
              </div>
              <Link to="/camping">
                <div className="camping-preview-button">Details</div>
              </Link>
          </div>
      </div>
    );
  }
}

export default CampingPreview;



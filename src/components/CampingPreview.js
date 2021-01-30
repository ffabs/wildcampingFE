import React, { Component } from 'react';
import Icon from './Icon';
import '../App.css';
import './CampingPreview.css';
import {Link} from 'react-router-dom';
import Data from '../camping-data.json';


class CampingPreview extends Component {
  
  render() {

    let image = Data[this.props.campingId]["pictures"]["pic1"];
    let name = Data[this.props.campingId]["name"]; 
    let price = +Data[this.props.campingId]["price"] || 0; 
    let bookingRequired = Data[this.props.campingId]["bookingRequired"];
    let naturalPark = Data[this.props.campingId]["naturalPark"];
    let fire = Data[this.props.campingId]["fireAllowed"];
    let toilet = Data[this.props.campingId]["toilet"];
    let legal = Data[this.props.campingId]["legal"];

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
                { bookingRequired === true &&
                  <Icon icon="booking" details="no"/>
                }
                { price === 0 &&
                  <Icon icon="free" details="no"/>
                }
                { naturalPark === true &&
                  <Icon icon="naturalPark" details="no"/>
                }
                { fire === true &&
                  <Icon icon="fire" details="no"/>
                }
                { toilet === true &&
                  <Icon icon="toilet" details="no"/>
                }
                { legal === true &&
                  <Icon icon="legal" details="no"/>
                }
              </div>
              <Link to={"/camping?name="+name}>
                <div className="camping-preview-button">Details</div>
              </Link>
          </div>
      </div>
    );
  }
}

export default CampingPreview;



import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from '../components/Icon';
import CampingImages from '../components/CampingImages';
// import Pin from '../components/Pin';
import './Camping.css';
import {useLocation} from "react-router-dom";
import Data from '../camping-data.json';
import {Redirect} from 'react-router-dom';

export default function Camping() {

  const search = useLocation().search;
  let campingId = new URLSearchParams(search).get('name');
  if(!Data[campingId]){
    return (
      <Redirect to="/" />
    ) 
  } else {

  let name = Data[campingId]["name"]; 
  let price = Data[campingId]["price"]; 
  let bookingRequired = Data[campingId]["bookingRequired"];
  
  let naturalPark = Data[campingId]["naturalPark"];
  let fire = Data[campingId]["fireAllowed"];
  let toilet = Data[campingId]["toilet"];
  let legal = Data[campingId]["legal"];
  
  let website = Data[campingId]["website"];
  let contacts = Data[campingId]["contacts"];
  let region = Data[campingId]["region"];
  let address = Data[campingId]["address"];
  let latitude = Data[campingId]["coordinates"]["latitude"];
  let longitude = Data[campingId]["coordinates"]["longitude"];
  let pic1 = Data[campingId]["pictures"]["pic1"];
  let pic2 = Data[campingId]["pictures"]["pic2"];
  let pic3 = Data[campingId]["pictures"]["pic3"];
  let pic4 = Data[campingId]["pictures"]["pic4"];
  let description = Data[campingId]["description"];
  let tents = Data[campingId]["tents"]["amount"] + " " + Data[campingId]["tents"]["type"];
  let accessibility = Data[campingId]["accessibility"];
  let nights = Data[campingId]["nights"]["maxNights"];

    return ( 
      <div>
        <Header />
        <div className="camping-page">
          <div className="camping-title">{name}</div>
          <div className="camping-intro-section">
            <CampingImages 
              pic1 = {pic1}
              pic2 = {pic2}
              pic3 = {pic3}
              pic4 = {pic4}
            />
            <div className="camping-info">
              <div className="camping-info-title">General Information</div>
              { description &&
                <div className="camping-description">{description}</div>
              }
              { website &&
                <div className="camping-website"><b>website: </b>
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {website}</a>
                </div>
              }
              { contacts &&
                <div className="camping-contacts"><b>contacts:</b> {contacts}</div>
              }
              { tents &&
                <div className="camping-tents"><b>tents allowed:</b> {tents}</div>
              }
              { nights &&
                <div className="camping-nights"><b>nights allowed:</b> {nights}</div>
              }
            </div>
          </div>
          <div className="camping-important">
            {bookingRequired === true &&
            <div className="camping-booking">
              <div className="camping-booking-text">The booking is required for this place</div>
              <div className="camping-booking-text">Phone: 123456789 Email: adsdsas@asd.com</div>
            </div>
            }
            <div className="camping-price">Expected price: {price}€</div>
          </div>            
          <div className="camping-title">Location</div>
            { region &&
              <div>Country: {region}</div>
            }
            { address &&
              <div>Address: {address}</div>
            }
            { latitude && longitude &&
              <div>Latitude: {latitude} Longitude: {longitude}</div>
            }
            { accessibility &&
              <div>Accessibility: {accessibility}</div>
            }
          {/* <div className="camping-map"> <Pin /> </div> */}
          <div className="camping-title">Characteristics</div>
          <div className="camping-characteristics">
            { naturalPark === true &&
              <Icon icon="naturalPark" details="yes"/>
            }
            { fire === true &&
              <Icon icon="fire" details="yes"/>
            }
            { toilet === true &&
              <Icon icon="toilet" details="yes"/>
            }
            { legal === true &&
              <Icon icon="legal" details="yes"/>
            }
          </div>
        </div>
        <Footer />
      </div>  
    );
  }
}
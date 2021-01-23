import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from '../components/Icon';
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
  let tents = Data[campingId]["tents"]["amount"] + Data[campingId]["tents"]["type"];
  let accessibility = Data[campingId]["accessibility"];
  let nights = Data[campingId]["nights"]["maxNights"];

    return ( 
      <div>
        <Header />
        <div className="camping-page">
          <div className="camping-title">{name}</div>
          <div className="camping-images">
            <img src={pic1} className="camping-image" alt="wild-camping" />
            <div className="camping-images-preview">
              { pic2 &&
                <img src={pic2} className="camping-image-preview" alt="wild-camping" />
              }
              { pic3 &&
                <img src={pic3} className="camping-image-preview" alt="wild-camping" />
              }
              { pic4 &&
                <img src={pic4} className="camping-image-preview" alt="wild-camping" />
              }
            </div>
          </div>
          <div> {description}
            additional data to add:
            "pictures"
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
          <div className="camping-title">Info</div>
            <div>{website}</div>
            <div>{contacts}</div>
            <div>{tents}</div>
            <div>{nights}</div>
          <div className="camping-title">Location</div>
            <div>Country: {region}</div>
            <div>Address: {address}</div>
            <div>Latitude: {latitude} Longitude: {longitude}</div>
            <div>Accessibility: {accessibility}</div>
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
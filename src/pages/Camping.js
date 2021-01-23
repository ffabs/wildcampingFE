import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from '../components/Icon';
// import Pin from '../components/Pin';
import './Camping.css';
import {useLocation} from "react-router-dom";
import Data from '../camping-data.json';

export default function Camping() {

  const search = useLocation().search;
  const campingId = new URLSearchParams(search).get('name');

  let image = Data[campingId]["pictures"]["pic1"];
  let name = Data[campingId]["name"]; 
  let price = Data[campingId]["price"]; 
  let bookingRequired = Data[campingId]["bookingRequired"];
  let naturalPark = Data[campingId]["naturalPark"];
  let fire = Data[campingId]["fireAllowed"];
  let toilet = Data[campingId]["toilet"];
  let legal = Data[campingId]["legal"];

  return ( 
    <div>
        <Header />
        <div className="camping-page">
          <div className="camping-title">{name}</div>
          <img src={image} className="camping-image" alt="wild-camping" />
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
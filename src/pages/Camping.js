import homeBackground from '../images/home-background.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from '../components/Icon';
import Pin from '../components/Pin';
import './Camping.css';

function Camping() {
  return ( 
    <div>
        <Header />
        <div className="camping-page">
          <div className="camping-title">Grimbach - Black Forest</div>
          <img src={homeBackground} className="camping-image" alt="wild-camping" />
          <div className="camping-important">
            <div className="camping-booking">
              <div className="camping-booking-text">The booking is required for this place</div>
              <div className="camping-booking-text">Phone: 123456789 Email: adsdsas@asd.com</div>
            </div>
            <div className="camping-price">Expected price: 10€</div>
          </div>
          <div className="camping-title">Location</div>
          <div className="camping-map"> <Pin /> </div>
          <div className="camping-title">Characteristics</div>
          <div className="camping-characteristics">
            <Icon icon="naturalPark" details="yes"/>
            <Icon icon="fire" details="yes"/>
            <Icon icon="toilet" details="yes"/>
          </div>
        </div>
        <Footer />
    </div>  
  );
}

export default Camping;

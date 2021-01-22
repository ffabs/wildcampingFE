import homeBackground from '../images/home-background.png';
import Icon from './Icon';
import '../App.css';
import './CampingPreview.css';
import {Link} from 'react-router-dom';

function CampingPreview() {
  return (
    <div className="camping-preview">
        <img src={homeBackground} className="camping-preview-image" alt="wild-camping" />
        <div className="camping-preview-text">
            <div className="camping-preview-title">Grimbach - Black Forest</div>
            <div className="camping-preview-priceandbooking">
                <div className="camping-preview-price">€ 10</div>
                <div className="camping-preview-booking">Booking required</div>
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

export default CampingPreview;



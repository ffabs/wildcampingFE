import '../App.css';
import './Footer.css';
import {Link} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="footer">
        <Link to="/">
            <div className="footer-element"> Homepage</div>
        </Link>
        <Link to="/search">
            <div className="footer-element"> Search wildcamps</div>
        </Link>
        <Link to="/login"> 
            <div className="footer-element">Log in</div>
        </Link>
        <Link to="/signup"> 
            <div className="footer-element">Sign up</div>
        </Link>
        {/* <div className="footer-element"> Privacy policy </div> */}
        <div className="footer has-text-centered">
          <div>
            Find us on
          </div>
          <div className="social-section">
              <div className="social fac">
                <SocialIcon className="icon" url="https://www.facebook.com/WildPeg-105294014944726" style={{ height: 50, width: 50 }} bgColor="#98A1AB" target="_blank" rel="noopener noreferrer"/>
              </div>  
              <div className="social">
                <SocialIcon className="icon" url="https://mobile.twitter.com/WildPeg" style={{ height: 50, width: 50 }} bgColor="#98A1AB" target="_blank" rel="noopener noreferrer"/>
              </div>
              <div className="social insta">
                <SocialIcon className="icon" url="https://www.instagram.com/noreply.wildpeg/" style={{ height: 50, width: 50 }} bgColor="#98A1AB" target="_blank" rel="noopener noreferrer"/>
              </div>
          </div>
          <div>
            All Rights Reserved
          </div>
          <a href="https://www.websitepolicies.com/policies/view/abeC33i2" target="_blank" rel="noopener noreferrer" className="policies">
            Terms and Conditions
          </a> 
          <a href="https://www.websitepolicies.com/policies/view/hM52IadN" target="_blank" rel="noopener noreferrer" className="policies">
            Privacy Policy
          </a> 
          <div className="logo-name">
            WildPeg
          </div>
        </div>
    </div>
  );
}

export default Footer;

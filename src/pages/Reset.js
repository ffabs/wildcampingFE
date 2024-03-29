import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import email from '../images/email.png';
import '../App.css';
import './Auth.css';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-190450937-1');
    ReactGA.pageview('/reset');
} 

class Reset extends Component {

  constructor (props) {
    super(props);   
    this.state = {
      email: ''
    };
  }

  handleEmail = event => {
    const email = event.target.value.toLowerCase();
    this.setState({
      email: email
    });
  }

  reset = event => {
    this.props.resetHandler(
      this.state.email
    )
  }
  
  render() {  
      return ( 
        <div>
            <Header />
            {this.props.resetLinkSent &&
            <div className="feedback-div">
              <img src={email} className="email-image" alt="email"/>
              <div className="feedback-message">Please check your email, the link to reset the password was just sent.</div>
            </div>
            }
            {this.props.validationMsg &&
              <div className="error-message">{this.state.validationMsg}</div>
            }
            
            {!this.props.resetLinkSent &&
            <div> 

            <div className="error-message">{this.props.validationMsg}</div>
            <div className="signup-page">
              <div className="signup-form"> 
                <div className="signup-calltoaction">
                  Forgot Password
                </div>
                <div className="hr"></div>
                <input
                  type="text" 
                  name="email"
                  placeholder="Email"
                  onChange={this.handleEmail}
                  className="input-field"
                />
                <div onClick={this.reset} className="auth-button">
                  <div>Reset Password</div>
                </div>
              </div>
                <div className="small-margin-top reset">or <Link to="/login">Log In</Link></div>
            </div>
            </div>
            }
            <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-190450937-1');
                  ReactGA.pageview('/reset');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
            </CookieConsent>
            <Footer />
        </div>  
      );
  };
}

export default Reset;
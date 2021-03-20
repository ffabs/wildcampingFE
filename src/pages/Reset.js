import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
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
    // if(this.props.token){
    //     return (
    //         <Redirect to="/search" />
    //     ) 
    // } else {
  
      return ( 
        <div>
            <Header />
            {this.props.validationMsg &&
              <div className="error-message">{this.state.validationMsg}</div>
            }
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
    // }
  };
}

export default Reset;
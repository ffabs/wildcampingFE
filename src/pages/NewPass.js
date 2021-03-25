import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import '../App.css';
import './Auth.css';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-190450937-1');
    ReactGA.pageview('/newpass');
} 

class NewPass extends Component {

  constructor (props) {
    super(props);   
    this.state = {
      password: ''
    };
  }

  handlePassword = event => {
    const password = event.target.value;
    this.setState({
      password: password
    });
  }

  updatePassword = event => {
    this.props.updatePasswordHandler(
      this.state.password
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
            <Header page="Login"/>
            {this.props.passwordUpdated &&
            <div className="feedback-div">
                {/* <img src={email} className="email-image" alt="email"/> */}
                <div className="feedback-message">Password updated successfully!</div>
                <div className="feedback-message"><Link to="/login" className="link-auth">Log In</Link> to proceed.</div>
            </div>
            }
            {this.props.validationMsg &&
              <div className="error-message">{this.state.validationMsg}</div>
            }
            {!this.props.passwordUpdated &&
            <div> 
            <div className="error-message">{this.props.validationMsg}</div>
            <div className="signup-page">
              <div className="signup-form"> 
                <div className="signup-calltoaction">
                    Update your Wildpeg password
                </div>
                <div className="hr"></div>
                <input
                  type="password" 
                  name="password"
                  placeholder="Password"
                  onChange={this.handlePassword}
                  className="input-field"
                />
                <div onClick={this.updatePassword} className="auth-button">
                  <div>Update Password</div>
                </div>
              </div>
            </div>
            </div>
            }
            <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  // alert("Accept was triggered by clicking the Accept button");
                  // this.props.GAcookiesOn()
                  ReactGA.initialize('UA-190450937-1');
                  ReactGA.pageview('/newpass');
              }}
              // onDecline={() => {
              //     console.log("not accepted")
              // }}
              >This website uses Google Analytics cookies to enhance the user experience.
            </CookieConsent>
            <Footer />
        </div>  
      );
    // }
  };
}

export default NewPass;
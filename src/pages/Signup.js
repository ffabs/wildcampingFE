import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import '../App.css';
import './Signup.css';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-190450937-1');
    ReactGA.pageview('/signup');
} 

class Signup extends Component {

  constructor (props) {
    super(props);   
    this.state = {
      username: '',
      email: '',
      password: '',
      newsletter: false,
        // location: this.props.currentLocation,
        // filterSectionCSS: "hide",
        // booking: this.props.booking,
        // free: this.props.free,
        // fire: this.props.fire,
        // toilet: this.props.toilet,
        // naturalPark: this.props.naturalPark,
        // legal: this.props.legal
    };
  }

  updateNewsletter = event => {
    if (this.state.newsletter) {
        this.setState({
          newsletter: false
        });
    } else {
        this.setState({
          newsletter: true
        });
    }
  }

  handleUsername = event => {
    const username = event.target.value.toLowerCase();
    this.setState({
      username: username
    });
  }

  handleEmail = event => {
    const email = event.target.value.toLowerCase();
    this.setState({
      email: email
    });
  }

  handlePassword = event => {
    const password = event.target.value;
    this.setState({
      password: password
    });
  }

  signup = event => {
    fetch('https://wildcamping-be.herokuapp.com/auth/signup', {
    // fetch('http://localhost:8080/auth/signup', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": this.state.username,
	      "email": this.state.email,
        "password": this.state.password,
        "newsletter": this.state.newsletter
      })
    })
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
  }
  
  render() {
  
      return ( 
        <div>
            <Header />
            <div className="auth">
              <div>
                Sign Up to WildPeg!
              </div>
              <hr></hr>
              <div><input
                  type="text" 
                  name="username"
                  placeholder="Username"
                  onChange={this.handleUsername}
                /></div>
              <div><input
                type="text" 
                name="email"
                placeholder="Email"
                onChange={this.handleEmail}
              /></div>
              <div><input
                type="password" 
                name="password"
                placeholder="Password"
                onChange={this.handlePassword}
              /></div>
              <div className="signup-checkbox">
                  <div>
                    <input type="checkbox" onChange={this.updateNewsletter}/>
                  </div>
                  <div>Yes! I want to get the most out of WildPeg by receiving emails with updates, personal recommendations and wild camping tips!</div>
              </div>
              <div onClick={this.signup} className="auth-button">
                <div>Sign Up</div>
              </div>
              <div>By signing up, you agree to our 
                <a href="https://www.websitepolicies.com/policies/edit/abeC33i2?type=tos&policy=basic&qa=y" target="_blank" rel="noopener noreferrer" className="policy-signup">
                  Terms of Use
                </a> 
                and
                <a href="https://www.websitepolicies.com/policies/edit/hM52IadN?type=privacy&policy=basic&qa=y" target="_blank" rel="noopener noreferrer" className="policy-signup">
                  Privacy Policy
                </a>.
              </div>
              <hr></hr>
              <div>Already have an account? <Link to="/login">Log In</Link></div>
            </div>
            <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  // alert("Accept was triggered by clicking the Accept button");
                  // this.props.GAcookiesOn()
                  ReactGA.initialize('UA-190450937-1');
                  ReactGA.pageview('/signup');
              }}
              // onDecline={() => {
              //     console.log("not accepted")
              // }}
              >This website uses Google Analytics cookies to enhance the user experience.
            </CookieConsent>
            <Footer />
        </div>  
      );

  };
}

export default Signup;

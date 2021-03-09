import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';

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
        "password": this.state.password
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
            <input
              type="text" 
              name="username"
              onChange={this.handleUsername}
            />
            <input
              type="text" 
              name="email"
              onChange={this.handleEmail}
            />
            <input
              type="password" 
              name="password"
              onChange={this.handlePassword}
            />
            <div onClick={this.signup}>
              <div>signup</div>
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

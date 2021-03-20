import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import {Redirect} from 'react-router-dom';
import '../App.css';
import './Auth.css';
import {Link} from 'react-router-dom';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-190450937-1');
    ReactGA.pageview('/signin');
} 

let loginAPI;
if (window.location.href.includes("localhost")) {
  loginAPI = "http://localhost:8080/auth/login";
} else {
  loginAPI = "https://wildcamping-be.herokuapp.com/auth/login";
}

class Login extends Component {

  constructor (props) {
    super(props);   
    this.state = {
      email: '',
      password: '',
      validationMsg: '',
      loginSuccess: '',
    };
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

  login = event => {
    fetch(loginAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
	      "email": this.state.email,
        "password": this.state.password
      })
    })
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        return this.setState({
          loginSuccess: true
        });
      }
      return res
        .json()
        .then(resData =>  {
          if(resData.message) {
            this.setState({
              validationMsg: resData.message
            });
          }
        });
    })
    .catch(err => console.log(err));
  }
  
  render() {
      if(this.state.loginSuccess === true){
        return (
            <Redirect to="/search" />
        ) 
    } else {
  
      return ( 
        <div>
            <Header page="Login"/>
            {this.state.validationMsg &&
              <div className="error-message">{this.state.validationMsg}</div>
            }
            <div className="signup-page">
              <div className="signup-form"> 
                <div className="signup-calltoaction">
                  Log In to your WildPeg account!
                </div>
                <div className="hr"></div>
                <input
                  type="text" 
                  name="email"
                  placeholder="Email"
                  onChange={this.handleEmail}
                  className="input-field"
                />
                <input
                  type="password" 
                  name="password"
                  placeholder="Password"
                  onChange={this.handlePassword}
                  className="input-field"
                />
                <div onClick={this.login} className="auth-button">
                  <div>Log In</div>
                </div>
              </div>
                <div className="margin-top">Don't have an account? <Link to="/signup" className="link-auth">Sign up</Link></div>
            </div>
            <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  // alert("Accept was triggered by clicking the Accept button");
                  // this.props.GAcookiesOn()
                  ReactGA.initialize('UA-190450937-1');
                  ReactGA.pageview('/login');
              }}
              // onDecline={() => {
              //     console.log("not accepted")
              // }}
              >This website uses Google Analytics cookies to enhance the user experience.
            </CookieConsent>
            <Footer />
        </div>  
      );
    }
  };
}

export default Login;
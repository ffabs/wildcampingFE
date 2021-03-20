import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Redirect} from 'react-router-dom';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import '../App.css';
import './Auth.css';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-190450937-1');
    ReactGA.pageview('/signup');
} 

let signupAPI;
if (window.location.href.includes("localhost")) {
  signupAPI = "http://localhost:8080/auth/signup";
} else {
  signupAPI = "https://wildcamping-be.herokuapp.com/auth/signup";
}

class Signup extends Component {

  constructor (props) {
    super(props);   
    this.state = {
      username: '',
      email: '',
      password: '',
      newsletter: false,
      validationMsg: '',
      CSSusername: '',
      CSSemail: '',
      CSSpassword: '',
      signupSuccess: '',
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
      CSSusername: '',
      username: username
    });
  }

  handleEmail = event => {
    const email = event.target.value.toLowerCase();
    this.setState({
      CSSemail: '',
      email: email
    });
  }

  handlePassword = event => {
    const password = event.target.value;
    this.setState({
      CSSpassword: '',
      password: password
    });
  }

  signup = event => {
    fetch(signupAPI, {
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
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        return this.setState({
          signupSuccess: true
        });
      }
      return res
        .json()
        .then(resData =>  {
          console.log(resData);
          if(resData.data) {
            this.setState({
              validationMsg: resData.data[0].msg,
              ['CSS'+resData.data[0].param]: 'error-field'
            });
          }
        })
    })
    .catch(err => console.log(err));
  }
  
  render() {
      if(this.state.signupSuccess === true){
          return (
              <Redirect to="/login"/>
          ) 
      } else {
  
      return ( 
        <div>
            <Header page="Signup"/>
            {this.state.validationMsg &&
              <div className="error-message">{this.state.validationMsg}</div>
            }
            <div className="signup-page">
              <div className="signup-form">
                <div className="signup-calltoaction">
                  Sign Up to WildPeg!
                </div>
                <div className="hr"></div>
                <input
                  type="text" 
                  name="username"
                  placeholder="Username"
                  onChange={this.handleUsername}
                  className={"input-field "+this.state.CSSusername}
                />
                <input
                  type="text" 
                  name="email"
                  placeholder="Email"
                  onChange={this.handleEmail}
                  className={"input-field "+this.state.CSSemail}
                />
                <input
                  type="password" 
                  name="password"
                  placeholder="Password"
                  onChange={this.handlePassword}
                  className={"input-field "+this.state.CSSpassword}
                />
                <div className="signup-checkbox">
                    <div>
                      <input className="signup-checkbox-box" type="checkbox" onChange={this.updateNewsletter}/>
                    </div>
                    <div>Yes! I want to signup to the newsletter!</div>
                </div>
                <div onClick={this.signup} className="auth-button">
                  <div>Sign Up</div>
                </div>
                <div className="policies-signup">By signing up, you agree to our 
                  <a href="https://www.websitepolicies.com/policies/view/abeC33i2" target="_blank" rel="noopener noreferrer" className="policy-signup">
                    Terms
                  </a> 
                  and
                  <a href="https://www.websitepolicies.com/policies/view/hM52IadN" target="_blank" rel="noopener noreferrer" className="policy-signup">
                    Privacy
                  </a>
                </div>
                <div className="hr"></div>
                </div>
                <div>Already have an account? <Link to="/login" className="link-auth">Log In</Link></div>
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

      }
  };
}

export default Signup;

import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Search.css';
import CampingPreview from '../components/CampingPreview';
import Location from '../components/Location';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import logo from '../images/logo.png';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-190450937-1');
    ReactGA.pageview('/search');
} 

class Search extends Component {
  
  render() {

    if(!this.props.camping1){
      return (
          <div>
              <Header />
              <div className="search-filtering">
                <Location {...this.props}/>
                <Filters {...this.props}/>
              </div>
              <div className="noresult-section">
                <img src={logo} className="noresult-image" alt="wildpeg-logo" />
                <div className="noresult-message">No wild camping found</div>
              </div>
              <Footer />
          </div>
      ) 
    } else {
  
      return ( 
        <div>
            <Header />
            <div className="search-filtering">
              <Location {...this.props}/>
              <Filters {...this.props}/>
            </div>
            <div className="search-list">
              {this.props.camping1 &&
                <CampingPreview campingId={this.props.camping1} />
              }
              {this.props.camping2 &&
                <CampingPreview campingId={this.props.camping2} />
              }
              {this.props.camping3 &&
                <CampingPreview campingId={this.props.camping3} />
              }
              {this.props.camping4 &&
                <CampingPreview campingId={this.props.camping4} />
              }
              {this.props.camping5 &&
                <CampingPreview campingId={this.props.camping5} />
              }
              {this.props.camping6 &&
                <CampingPreview campingId={this.props.camping6} />
              }
              <Pagination 
                {...this.props}
              />
            </div>
            <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  // alert("Accept was triggered by clicking the Accept button");
                  // this.props.GAcookiesOn()
                  ReactGA.initialize('UA-190450937-1');
                  ReactGA.pageview('/search');
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

export default Search;

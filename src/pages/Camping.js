import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from '../components/Icon';
import CampingImages from '../components/CampingImages';
import './Camping.css';
import {useLocation} from "react-router-dom";
import Data from '../camping-data.json';
import {Redirect} from 'react-router-dom';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';

export default function Camping() {

  const search = useLocation().search;
  let campingId = new URLSearchParams(search).get('name');
  if(!Data[campingId]){
    return (
      <Redirect to="/" />
    ) 
  } else {

  let name = Data[campingId]["name"]; 
  let price = +Data[campingId]["price"] || 0; 
  let bookingRequired = Data[campingId]["bookingRequired"];
  let naturalPark = Data[campingId]["naturalPark"];
  let fire = Data[campingId]["fireAllowed"];
  let toilet = Data[campingId]["toilet"];
  let legal = Data[campingId]["legal"];
  let website = Data[campingId]["website"];
  let contacts = Data[campingId]["contacts"];
  let region = Data[campingId]["region"];
  let address = Data[campingId]["address"];
  let latitude = Data[campingId]["coordinates"]["latitude"];
  let longitude = Data[campingId]["coordinates"]["longitude"];
  let pic1 = Data[campingId]["pictures"]["pic1"];
  let pic2 = Data[campingId]["pictures"]["pic2"];
  let pic3 = Data[campingId]["pictures"]["pic3"];
  let pic4 = Data[campingId]["pictures"]["pic4"];
  let description = Data[campingId]["description"];
  let tents = Data[campingId]["tents"]["amount"] + " " + Data[campingId]["tents"]["type"];
  let accessibility = Data[campingId]["accessibility"];
  let nights = Data[campingId]["nights"]["maxNights"];
  let googlemaps = Data[campingId]["googlemaps"];

  let consent = getCookieConsentValue();
  if (consent === "true") {
      ReactGA.initialize('UA-190450937-1');
      ReactGA.pageview('/camping');
      ReactGA.pageview(name);
  }
    return ( 
      <div>
        <Header {...this.props}/>
        <div className="camping-page">
          <div className="camping-title">{name}</div>
          <div className="camping-intro-section">
            <CampingImages 
              pic1 = {pic1}
              pic2 = {pic2}
              pic3 = {pic3}
              pic4 = {pic4}
            />
            <div className="camping-info">
              <div className="camping-section-title">General information</div>
              { description &&
                <div className="camping-description">{description}</div>
              }
              { website &&
                <div className="camping-website"><b>website: </b>
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {website}</a>
                </div>
              }
              { contacts &&
                <div className="camping-contacts"><b>contacts:</b> {contacts}</div>
              }
              { tents &&
                <div className="camping-tents"><b>tents allowed:</b> {tents}</div>
              }
              { nights &&
                <div className="camping-nights"><b>nights allowed:</b> {nights}</div>
              }
              { accessibility &&
                <div className="camping-accessibility"><b>accessibility:</b> {accessibility}</div>
              }              
              <div className="camping-price"><b>expected price:</b> {price}€</div>
              <div className="camping-char-title">Main features</div>
              <div className="camping-characteristics">
                { bookingRequired === true &&
                  <Icon icon="booking" details="yes"/>
                }
                { price === 0 &&
                  <Icon icon="free" details="yes"/>
                }
                { naturalPark === true &&
                  <Icon icon="naturalPark" details="yes"/>
                }
                { fire === true &&
                  <Icon icon="fire" details="yes"/>
                }
                { toilet === true &&
                  <Icon icon="toilet" details="yes"/>
                }
                { legal === true &&
                  <Icon icon="legal" details="yes"/>
                }
              </div>
            </div>
          </div>       
          <div className="camping-location-section">
              <div className="camping-section-title">Location</div>
              { region &&
                <div className="camping-region"> <b>Country: </b> {region}</div>
              }
              { address &&
                <div className="camping-address"> <b>Address: </b>{address}</div>
              }
              { latitude && longitude &&
                <div className="camping-coordinates"><b>Latitude: </b> {latitude} <b>Longitude: </b>{longitude}</div>
              }
              <iframe 
                className="camping-map"
                title="map"
                // frameborder="0" 
                style={{ border: 0 }}
                src={"https://www.google.com/maps/embed/v1/place?q=place_id:"+googlemaps+"&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs"} 
                // allowfullscreen 
              />
            </div>
        </div>
        <CookieConsent 
            enableDeclineButton 
            buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
            onAccept={() => {
                // alert("Accept was triggered by clicking the Accept button");
                // this.props.GAcookiesOn()
                ReactGA.pageview('/camping');
                ReactGA.pageview(name);
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
}
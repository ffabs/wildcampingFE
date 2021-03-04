import homeBackground from '../images/home-background.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import './Home.css';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-190450937-1');
    ReactGA.pageview('/home');
} 

function Home() {
  return ( 
    <div>
        <Header /> 
        <div className="home-background">
            <div className="home-background-text">
                <p>Find the best <b>wild camping</b> experiences in the German deep Nature</p>
                <div className="home-background-form">
                    <Link to="/search">
                        <div className="home-background-button">
                            Search
                        </div>
                    </Link>
                </div>
            </div>
            <img src={homeBackground} className="home-background-image" alt="wild-camping" />
        </div>  
        <div className="home-wildcampingintro">
            <div className="home-question">Is camping in the Nature allowed in Germany?</div>
            <div className="home-paragraph">Officially,  wild camping is not allowed in Germany but...</div>
            <div className="home-paragraph">There are special areas, often in natual parks, where camping in the nature is fully legal.
            In some cases, these areas require a booking and cost about 10 euros per night.
            In other cases, they are free and in some other cases not even a booking is required.</div>
            <div className="home-paragraph">Are you interested in having an wild experience in the Nature worry free? <Link to="/search"> <u>Search</u> </Link> now for available places!</div>
        </div>
        <CookieConsent 
            enableDeclineButton 
            buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
            onAccept={() => {
                // alert("Accept was triggered by clicking the Accept button");
                // this.props.GAcookiesOn()
                ReactGA.initialize('UA-190450937-1');
                ReactGA.pageview('/home');
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

export default Home;

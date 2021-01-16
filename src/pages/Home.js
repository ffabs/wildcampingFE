import homeBackground from '../images/home-background.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return ( 
    <div>
        <Header /> 
        <div className="home-background">
            <div className="home-background-text">
                <p>Find the best <b>wild camping</b> experiences in the German deep Nature</p>
                <div className="home-background-form">
                    <a href="/search">
                        <div className="home-background-button">
                            Search
                        </div>
                    </a>
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
            <div className="home-paragraph">Are you interested in having an wild experience in the Nature worry free? <a href="/search"> <u>Search</u> </a> now for available places!</div>
        </div>
        <Footer />
    </div>  
  );
}

export default Home;

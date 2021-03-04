import React, { Component } from 'react';
import LoadLocationData from './functions/LoadLocationData';
import LoadPage from './functions/LoadPage';
import LoadFilterData from './functions/LoadFilterData';
import LoadAllCommonData from './functions/LoadAllCommonData';
import Home from './pages/Home';
import Search from './pages/Search';
import Camping from './pages/Camping';
import Signup from './pages/Signup';
import './App.css';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

class App extends Component {
  constructor (props) {
    super(props);   
    this.state = {
        location: "All locations",
        booking: 0,
        free: 0,
        fire: 0,
        toilet: 0,
        naturalPark: 0,
        legal: 0,
        page: 1,
        lastPage: 7,
        camping1: "Eifel Natural Park",
        camping2: "Barmstedt - Wildes",
        camping3: "Blomnath - Wildes",
        camping4: "Drage - Wildes",
        camping5: "Eidertal - Wildes",
        camping6: "Enge-Sande - Wildes",
        currentCampingIds: ""
    };
    this.filterUpdated = this.filterUpdated.bind(this);
  }
  
  handleNewLocation = event => {
    let newLocation = event.target.value;
    let campingIdsRightLocation = LoadLocationData(newLocation);
    let campingIdsRightbooking = LoadFilterData("bookingRequired", this.state.booking);
    let campingIdsRightfree = LoadFilterData("price", this.state.free);
    let campingIdsRightfire = LoadFilterData("fireAllowed", this.state.fire);
    let campingIdsRighttoilet = LoadFilterData("toilet", this.state.toilet);
    let campingIdsRightnaturalPark = LoadFilterData("naturalPark", this.state.naturalPark);
    let campingIdsRightlegal = LoadFilterData("legal", this.state.legal);

    let allCommonData = LoadAllCommonData(campingIdsRightLocation, campingIdsRightbooking, campingIdsRightfree, campingIdsRightfire, campingIdsRighttoilet, campingIdsRightnaturalPark, campingIdsRightlegal);

    let pageArray = LoadPage(1, allCommonData);
    let lastPage = pageArray[0];
    let camping1 = pageArray[1];
    let camping2 = pageArray[2];
    let camping3 = pageArray[3];
    let camping4 = pageArray[4];
    let camping5 = pageArray[5];
    let camping6 = pageArray[6];
    this.setState({
      location: newLocation,
      page: 1,
      lastPage: lastPage,
      camping1: camping1,
      camping2: camping2,
      camping3: camping3,
      camping4: camping4,
      camping5: camping5,
      camping6: camping6,
    });
  }

  updatePage = event => {
    let newPage = event.target.value;
    let campingIdsRightLocation = LoadLocationData(this.state.location);
    let campingIdsRightbooking = LoadFilterData("bookingRequired", this.state.booking);
    let campingIdsRightfree = LoadFilterData("price", this.state.free);
    let campingIdsRightfire = LoadFilterData("fireAllowed", this.state.fire);
    let campingIdsRighttoilet = LoadFilterData("toilet", this.state.toilet);
    let campingIdsRightnaturalPark = LoadFilterData("naturalPark", this.state.naturalPark);
    let campingIdsRightlegal = LoadFilterData("legal", this.state.legal);

    let allCommonData = LoadAllCommonData(campingIdsRightLocation, campingIdsRightbooking, campingIdsRightfree, campingIdsRightfire, campingIdsRighttoilet, campingIdsRightnaturalPark, campingIdsRightlegal);

    let pageArray = LoadPage(newPage, allCommonData);
    let lastPage = pageArray[0];
    let camping1 = pageArray[1];
    let camping2 = pageArray[2];
    let camping3 = pageArray[3];
    let camping4 = pageArray[4];
    let camping5 = pageArray[5];
    let camping6 = pageArray[6];
    this.setState({
      page: newPage,
      lastPage: lastPage,
      camping1: camping1,
      camping2: camping2,
      camping3: camping3,
      camping4: camping4,
      camping5: camping5,
      camping6: camping6,
    });
  }

  filterUpdated(bookingF, freeF, fireF, toiletF, naturalParkF, legalF){
    let booking = bookingF;
    let free = freeF;
    let fire = fireF;
    let toilet = toiletF;
    let naturalPark = naturalParkF;
    let legal = legalF;

    let campingIdsRightLocation = LoadLocationData(this.state.location);
    let campingIdsRightbooking = LoadFilterData("bookingRequired", booking);
    let campingIdsRightfree = LoadFilterData("price", free);
    let campingIdsRightfire = LoadFilterData("fireAllowed", fire);
    let campingIdsRighttoilet = LoadFilterData("toilet", toilet);
    let campingIdsRightnaturalPark = LoadFilterData("naturalPark", naturalPark);
    let campingIdsRightlegal = LoadFilterData("legal", legal);

    let allCommonData = LoadAllCommonData(campingIdsRightLocation, campingIdsRightbooking, campingIdsRightfree, campingIdsRightfire, campingIdsRighttoilet, campingIdsRightnaturalPark, campingIdsRightlegal);
    
    let pageArray = LoadPage(1, allCommonData);
    let lastPage = pageArray[0];
    let camping1 = pageArray[1];
    let camping2 = pageArray[2];
    let camping3 = pageArray[3];
    let camping4 = pageArray[4];
    let camping5 = pageArray[5];
    let camping6 = pageArray[6];
    this.setState({
      booking: booking,
      free: free,
      fire: fire,
      toilet: toilet,
      naturalPark: naturalPark,
      legal: legal,
      page: 1,
      lastPage: lastPage,
      camping1: camping1,
      camping2: camping2,
      camping3: camping3,
      camping4: camping4,
      camping5: camping5,
      camping6: camping6
    });
    
  }

  render() {

    return (
      <HashRouter>
        <ScrollToTop>
          <Switch>
            <Route exact={true} path='/' render={() => (
              <Home />
            )}/>
            <Route exact={true} path='/search' render={() => (
              <Search
                handleNewLocation={this.handleNewLocation}
                updatePage={this.updatePage}
                filterUpdated={this.filterUpdated}
                camping1={this.state.camping1}
                camping2={this.state.camping2}
                camping3={this.state.camping3}
                camping4={this.state.camping4}
                camping5={this.state.camping5}
                camping6={this.state.camping6}
                currentLocation={this.state.location}
                booking={this.state.booking}
                free={this.state.free}
                fire={this.state.fire}
                toilet={this.state.toilet}
                naturalPark={this.state.naturalPark}
                legal={this.state.legal}
                currentPage={this.state.page}
                lastPage={this.state.lastPage}
              />
            )}/>
            <Route exact={true} path='/camping' render={() => (
              <Camping />
            )}/>
            <Route exact={true} path='/signup' render={() => (
              <Signup />
            )}/>
            <Route render={() => (
              <Redirect to="/" />
            )}/>
          </Switch>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;

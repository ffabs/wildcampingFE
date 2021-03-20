import React, { Component } from 'react';
import LoadLocationData from './functions/LoadLocationData';
import LoadPage from './functions/LoadPage';
import LoadFilterData from './functions/LoadFilterData';
import LoadAllCommonData from './functions/LoadAllCommonData';
import Home from './pages/Home';
import Search from './pages/Search';
import Camping from './pages/Camping';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Reset from './pages/Reset';
import './App.css';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

class App extends Component {
  constructor (props) {
    super(props);   
    this.state = {
        isAuth: false,
        token: null,
        userId: null,
        validationMsg: '',

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
    this.loginHandler = this.loginHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    this.setState({ isAuth: true, token: token, userId: userId });
    this.setAutoLogout(remainingMilliseconds);
  }

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  };

  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };
  
  loginHandler(email, password){
    let loginAPI;
    if (window.location.href.includes("localhost")) {
      loginAPI = "http://localhost:8080/auth/login";
    } else {
      loginAPI = "https://wildcamping-be.herokuapp.com/auth/login";
    }
    fetch(loginAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
	      "email": email,
        "password": password
      })
    })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        return res
                .json()
                .then(resData =>  {
                  if(resData.message) {
                    this.setState({
                      validationMsg: resData.message
                    });
                  }
                });
      }
      else {
        return res
                .json()
                .then(resData => {
                  this.setState({
                    isAuth: true,
                    token: resData.token,
                    // authLoading: false,
                    userId: resData.userId,
                    validationMsg: ''
                  });
                  localStorage.setItem('token', resData.token);
                  localStorage.setItem('userId', resData.userId);
                  const remainingMilliseconds = 60 * 60 * 1000;
                  const expiryDate = new Date(
                    new Date().getTime() + remainingMilliseconds
                  );
                  localStorage.setItem('expiryDate', expiryDate.toISOString());
                  this.setAutoLogout(remainingMilliseconds);
                })
      }
        
    })
    .catch(err => console.log(err));
  }

  resetHandler(email){
    console.log(email);
    let loginAPI;
    if (window.location.href.includes("localhost")) {
      loginAPI = "http://localhost:8080/auth/reset";
    } else {
      loginAPI = "https://wildcamping-be.herokuapp.com/auth/reset";
    }
    fetch(loginAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
	      "email": email
      })
    })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        return res
                .json()
                .then(resData =>  {
                  if(resData.message) {
                    this.setState({
                      validationMsg: resData.message
                    });
                  }
                });
      }
      else {
        return res
      } 
    })
    .catch(err => console.log(err));
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
              <Home 
                token={this.state.token}
                logoutHandler={this.logoutHandler}
              />
            )}/>
            <Route exact={true} path='/search' render={() => (
              <Search
                token={this.state.token}
                logoutHandler={this.logoutHandler}

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
              <Camping 
                token={this.state.token}
                logoutHandler={this.logoutHandler}
              />
            )}/>
            <Route exact={true} path='/signup' render={() => (
              <Signup />
            )}/>
            <Route exact={true} path='/login' render={() => (
              <Login 
                loginHandler={this.loginHandler} 
                validationMsg={this.state.validationMsg}
                token={this.state.token}
              />
            )}/>
            <Route exact={true} path='/reset' render={() => (
              <Reset 
                resetHandler={this.resetHandler} 
                validationMsg={this.state.validationMsg}
                // token={this.state.token}
              />
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

import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CampingPreview from '../components/CampingPreview';
import './Search.css';
import Data from '../camping-data.json';

class Search extends Component {
  
  render() {

    let campingId = Data["Camping in the Eifel"]["name"];

    return ( 
      <div>
          <Header /> 
          <div className="search-list">
              <CampingPreview campingId={campingId} />
              <CampingPreview campingId={campingId} />
              <CampingPreview campingId={campingId} />
              <CampingPreview campingId={campingId} />
              <CampingPreview campingId={campingId} />
              <CampingPreview campingId={campingId} />
          </div>
          <Footer />
      </div>  
    );
  }
}

export default Search;

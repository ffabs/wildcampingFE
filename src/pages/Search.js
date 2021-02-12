import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Search.css';
import CampingPreview from '../components/CampingPreview';
import Location from '../components/Location';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';

class Search extends Component {
  
  render() {
 
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
          <Footer />
      </div>  
    );
};
}

export default Search;

import React, { Component } from 'react';
import Data from '../camping-data.json';
import './Pagination.css';
import '../App.css';
import './Location.css';
import CampingPreview from './CampingPreview';
import Location from './Location';
import Filters from './Filters';
import Pagination from './Pagination';

class SearchData extends Component {

    loadLocationData() {
        let campingIdsAll = [];
        for (var x in Data) {
            campingIdsAll.push(x);
        }

        let campingIdsRightLocation = [];
        let currentLocation = this.state.location;
        let selectedLocation;
        switch(currentLocation) {
            case 2:
                selectedLocation = "Baden-Württemberg";
            break;
            case 3:
                selectedLocation = "Bayern";
            break;
            case 4:
                selectedLocation = "North Rhine-Westphalia";
            break;
            case 5:
                selectedLocation = "Rhineland-Palatinate";
            break;
            case 6:
                selectedLocation = "Schleswig-Holstein";
            break;
            default:
                selectedLocation = "North Rhine-Westphalia";
        }
        for (let i=0; i < campingIdsAll.length; i++) {
            if(Data[campingIdsAll[i]]["region"] === selectedLocation) {
              campingIdsRightLocation.push(campingIdsAll[i]);
            }
        }
        this.loadCampingIdsRightLocation(campingIdsRightLocation);
    }

    loadCampingIdsRightLocation(campingIdsRightLocation) {
        console.log(campingIdsRightLocation);
    }

    render() {

        var redirectValue = "no";
        var campingIdsAll = [];
        let campingIdsRightLocation = [];
        let campingIdsRightFilterBooking = [];
        let campingIdsRightFilterFree = [];
        let campingIdsRightFilterFire = [];
        let campingIdsRightFilterToilet = [];
        let campingIdsRightFilterNaturalPark = [];
        let campingIdsRightFilterLegal = [];
        let campingIds = [];
        var campingIdsAll = [];
        for (var x in Data) {
        campingIdsAll.push(x);
        }

        // const location = +new URLSearchParams(this.props.search).get('location');
        let currentLocation = this.state.location;
        if (currentLocation > 1 && currentLocation < 7) {
        let selectedLocation;
        switch(currentLocation) {
            case 2:
                selectedLocation = "Baden-Württemberg";
            break;
            case 3:
                selectedLocation = "Bayern";
            break;
            case 4:
                selectedLocation = "North Rhine-Westphalia";
            break;
            case 5:
                selectedLocation = "Rhineland-Palatinate";
            break;
            case 6:
                selectedLocation = "Schleswig-Holstein";
            break;
            default:
                selectedLocation = "North Rhine-Westphalia";
        }
      for (let i=0; i < campingIdsAll.length; i++) {
        if(Data[campingIdsAll[i]]["region"] === selectedLocation) {
          campingIdsRightLocation.push(campingIdsAll[i]);
        }
      }
    } else {
      currentLocation = 1;
      campingIdsRightLocation = campingIdsAll;
    }

    const filterBooking = +new URLSearchParams(this.props.search).get('booking');
    let currentFilterBooking =  filterBooking || 0;
    
    const filterFree = +new URLSearchParams(this.props.search).get('free');
    let currentFilterFree =  filterFree || 0;

    const filterFire = +new URLSearchParams(this.props.search).get('fire');
    let currentFilterFire =  filterFire || 0;

    const filterToilet = +new URLSearchParams(this.props.search).get('toilet');
    let currentFilterToilet =  filterToilet || 0;

    const filterNaturalPark = +new URLSearchParams(this.props.search).get('naturalPark');
    let currentFilterNaturalPark =  filterNaturalPark || 0;

    const filterLegal = +new URLSearchParams(this.props.search).get('legal');
    let currentFilterLegal =  filterLegal || 0;

    if(currentFilterBooking === 1 || currentFilterFree === 1 || currentFilterFire === 1 || currentFilterToilet === 1 || currentFilterNaturalPark === 1 || currentFilterLegal === 1){
        if (currentFilterBooking === 1) {
          for (let a=0; a < campingIdsRightLocation.length; a++) {
            if(Data[campingIdsRightLocation[a]]["bookingRequired"] === true) {
              campingIds.push(campingIdsRightLocation[a]);
            }
          }
        } else {campingIdsRightFilterBooking = campingIdsRightLocation}
        if (currentFilterFree === 1) {
          for (let b=0; b < campingIdsRightLocation.length; b++) {
            if(+Data[campingIdsRightLocation[b]]["price"] === 0) {
              campingIdsRightFilterFree.push(campingIdsRightLocation[b]);
            }
          }
        } else {campingIdsRightFilterFree = campingIdsRightLocation}
        if (currentFilterFire === 1) {
          for (let c=0; c < campingIdsRightLocation.length; c++) {
            if(Data[campingIdsRightLocation[c]]["fireAllowed"] === true) {
              campingIdsRightFilterFire.push(campingIdsRightLocation[c]);
            }
          }
        } else {campingIdsRightFilterFire = campingIdsRightLocation}
        if (currentFilterToilet === 1) {
          for (let d=0; d < campingIdsRightLocation.length; d++) {
            if(Data[campingIdsRightLocation[d]]["toilet"] === true) {
              campingIdsRightFilterToilet.push(campingIdsRightLocation[d]);
            }
          }
        } else {campingIdsRightFilterToilet = campingIdsRightLocation}
        if (currentFilterNaturalPark === 1) {
          for (let e=0; e < campingIdsRightLocation.length; e++) {
            if(Data[campingIdsRightLocation[e]]["naturalPark"] === true) {
              campingIdsRightFilterNaturalPark.push(campingIdsRightLocation[e]);
            }
          }
        } else {campingIdsRightFilterNaturalPark = campingIdsRightLocation}
        if (currentFilterLegal === 1) {
          for (let f=0; f < campingIdsRightLocation.length; f++) {
            if(Data[campingIdsRightLocation[f]]["toilet"] === true) {
              campingIdsRightFilterLegal.push(campingIdsRightLocation[f]);
            }
          }
        } else {campingIdsRightFilterLegal = campingIdsRightLocation}
        
    } else {
      campingIds = campingIdsRightLocation;
    }
    
    
    const page = +new URLSearchParams(this.props.search).get('page');
    let itemsPerPage = 6;
    let currentPage = page || 1;
    let firstIndex = ( currentPage - 1 ) * itemsPerPage;
    let secondIndex = firstIndex+1;
    let thirdIndex = secondIndex+1;
    let forthIndex = thirdIndex+1;
    let fifthIndex = forthIndex+1;
    let sixthIndex = fifthIndex+1;
    let lastPage = Math.ceil(campingIds.length / itemsPerPage);
    

        return (
            <div>
                SearchData: {this.props.search}
                <div className="search-filtering">
                    <Location 
                    {...this.props}
                        currentLocation={currentLocation}
                        location={this.state.location}
                        booking={currentFilterBooking}
                        free={currentFilterFree}
                        fire={currentFilterFire}
                        toilet={currentFilterToilet}
                        naturalPark={currentFilterNaturalPark}
                        legal={currentFilterLegal}
                    />
                    <Filters 
                    currentLocation={currentLocation}
                    booking={currentFilterBooking}
                    free={currentFilterFree}
                    fire={currentFilterFire}
                    toilet={currentFilterToilet}
                    naturalPark={currentFilterNaturalPark}
                    legal={currentFilterLegal}
                    />
                </div>
                <div className="search-list">
                    {campingIds[firstIndex] &&
                    <CampingPreview campingId={campingIds[firstIndex]} />
                    }
                    {campingIds[secondIndex] &&
                    <CampingPreview campingId={campingIds[secondIndex]} />
                    }
                    {campingIds[thirdIndex] &&
                    <CampingPreview campingId={campingIds[thirdIndex]} />
                    }
                    {campingIds[forthIndex] &&
                    <CampingPreview campingId={campingIds[forthIndex]} />
                    }
                    {campingIds[fifthIndex] &&
                    <CampingPreview campingId={campingIds[fifthIndex]} />
                    }
                    {campingIds[sixthIndex] &&
                    <CampingPreview campingId={campingIds[sixthIndex]} />
                    }
                    <Pagination 
                    currentLocation={currentLocation}
                    booking={currentFilterBooking}
                    free={currentFilterFree}
                    fire={currentFilterFire}
                    toilet={currentFilterToilet}
                    naturalPark={currentFilterNaturalPark}
                    legal={currentFilterLegal}
                    currentPage={currentPage}
                    lastPage={lastPage}
                    />
                </div>
            </div>
        )  

    }

}


export default SearchData;
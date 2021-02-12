import React, { Component } from 'react';
import './Location.css';

class Location extends Component {

    render() {

        return (
            <div>
                <select onChange={this.props.handleNewLocation} className="select-input" value={this.props.currentLocation}>
                    <option value="All locations"> All locations, Germany </option>
                    <option value="Baden-Württemberg"> Baden-Württemberg, Germany </option>
                    <option value="Bayern"> Bayern, Germany </option>
                    <option value="North Rhine-Westphalia"> North Rhine-Westphalia, Germany </option>
                    <option value="Rhineland-Palatinate"> Rhineland-Palatinate, Germany </option>
                    <option value="Schleswig-Holstein"> Schleswig-Holstein, Germany </option>
                </select>
            </div>
        ) 

    }

}


export default Location;
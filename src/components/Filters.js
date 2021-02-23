import React, { Component } from 'react';
import './Pagination.css';
import '../App.css';
import './Filters.css';

class Filter extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            location: this.props.currentLocation,
            filterSectionCSS: "hide",
            booking: this.props.booking,
            free: this.props.free,
            fire: this.props.fire,
            toilet: this.props.toilet,
            naturalPark: this.props.naturalPark,
            legal: this.props.legal
        };
    }

    showFilters = event => {
        this.setState({
            filterSectionCSS: "filter-section"
        });
    }

    hideFilters = event => {
        this.setState({
            filterSectionCSS: "hide"
        });
        this.props.filterUpdated(
            this.state.booking,
            this.state.free,
            this.state.fire,
            this.state.toilet,
            this.state.naturalPark,
            this.state.legal);
    }

    updateFilter = event => {
        let filter = event.target.value;
        if (this.state[filter]) {
            this.setState({
                [filter]: 0
            });
        } else {
            this.setState({
                [filter]: 1
            });
        }
    }

    render() {

        let filterNumber = 0;
        if(this.state.booking) {
            filterNumber++;
        }
        if(this.state.free) {
            filterNumber++;
        }
        if(this.state.fire) {
            filterNumber++;
        }
        if(this.state.toilet) {
            filterNumber++;
        }
        if(this.state.naturalPark) {
            filterNumber++;
        }
        if(this.state.legal) {
            filterNumber++;
        }

        return (
            <div>
                <div onClick={this.showFilters} className="filter-button">
                    <div>{filterNumber + " filters selected"}</div>
                </div>
                <div className={this.state.filterSectionCSS}>
                    <div className="filter-checkbox">
                        <div>📤 Booking required</div>
                        <div><input type="checkbox" value="booking" checked={this.state.booking} onChange={this.updateFilter}/></div>
                    </div>
                    <div className="filter-checkbox">
                        <div>☮️ No money required</div>
                        <div><input type="checkbox" value="free" checked={this.state.free} onChange={this.updateFilter}/></div>
                    </div>
                    <div className="filter-checkbox">
                        <div>🔥 Fireplace allowed</div>
                        <div><input type="checkbox" value="fire" checked={this.state.fire} onChange={this.updateFilter}/></div>
                    </div>
                    <div className="filter-checkbox">
                        <div>🚽 Toilet available</div>
                        <div><input type="checkbox" value="toilet" checked={this.state.toilet} onChange={this.updateFilter}/></div>
                    </div>
                    <div className="filter-checkbox">
                        <div>🏞️ In a natural park</div>
                        <div><input type="checkbox" value="naturalPark" checked={this.state.naturalPark} onChange={this.updateFilter}/></div>
                    </div>
                    <div className="filter-checkbox">
                        <div>👮 Official camping place</div>
                        <div><input type="checkbox" value="legal" checked={this.state.legal} onChange={this.updateFilter}/></div>
                    </div>
                    <div className="done-button" onClick={this.hideFilters}>
                        Done
                    </div>
                </div>
            </div>
        )
    }

}


export default Filter;
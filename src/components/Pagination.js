import React, { Component } from 'react';
import './Pagination.css';
import '../App.css';
import {Link} from 'react-router-dom';

class Pagination extends Component {

    render() {

        let currentPage = this.props.currentPage;
        let nextPage = currentPage + 1;
        let lastPage = this.props.lastPage;
        let previousPage = currentPage - 1;
        
        return (
            <div className="pagination">
                {currentPage !== 1 &&
                    <Link to="/search?page=1">
                        <div className="pagination-number">1</div>
                    </Link>
                }
                {previousPage > 1 &&
                    <Link to={"/search?page="+previousPage}>
                        <div className="pagination-number">{previousPage}</div> 
                    </Link>
                }
                <div className="pagination-number pagination-number-current">{currentPage}</div>
                {nextPage <= lastPage &&
                    <Link to={"/search?page="+nextPage}>
                        <div className="pagination-number">{nextPage}</div> 
                    </Link>
                } 
            </div>
        )

    }

}


export default Pagination;
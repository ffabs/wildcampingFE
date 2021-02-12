import React, { Component } from 'react';
import './Pagination.css';
import '../App.css';

class Pagination extends Component {

    render() {
        let currentPage = +this.props.currentPage;
        let nextPage = +currentPage + 1;
        let lastPage = +this.props.lastPage;
        let previousPage = +currentPage - 1;
        
        return (
            <div className="pagination">
                {currentPage > 1 &&
                    <button onClick={this.props.updatePage} value={previousPage} className="pagination-number pagination-text">
                        Previous
                    </button>
                }
                {previousPage > 0 &&
                    <button onClick={this.props.updatePage} value={previousPage} className="pagination-number">
                        {previousPage}
                    </button>
                }
                <div className="pagination-number pagination-number-current">{currentPage}</div>
                {nextPage <= lastPage &&
                    <button onClick={this.props.updatePage} value={nextPage} className="pagination-number">
                        {nextPage}
                    </button>
                }
                {currentPage === 1 && lastPage >= 3 &&
                    <button onClick={this.props.updatePage} value="3" className="pagination-number">
                        3
                    </button>
                }
                {nextPage < lastPage &&
                    <button onClick={this.props.updatePage} value={nextPage}  className="pagination-number pagination-text">
                        Next
                    </button>
                }
            </div>
        )

    }

}


export default Pagination;
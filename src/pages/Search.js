import Header from '../components/Header';
import Footer from '../components/Footer';
import CampingPreview from '../components/CampingPreview';
import './Search.css';
import Data from '../camping-data.json';
import Pagination from '../components/Pagination';
import {useLocation} from "react-router-dom";

export default function Search(props) {
  
    var campingIds = [];
    for (var x in Data) {
      campingIds.push(x);
    }

    const search = useLocation().search;
    const page = +new URLSearchParams(search).get('page');
    let itemsPerPage = 6;
    let currentPage = page || 1;
    let firstIndex = ( currentPage - 1 ) * itemsPerPage;
    let lastPage = Math.ceil(campingIds.length / itemsPerPage);

    return ( 
      <div>
          <Header />
          <div className="search-list">
            {campingIds[firstIndex] &&
              <CampingPreview campingId={campingIds[firstIndex]} />
            }
            {campingIds[firstIndex+1] &&
              <CampingPreview campingId={campingIds[firstIndex+1]} />
            }
            {campingIds[firstIndex+2] &&
              <CampingPreview campingId={campingIds[firstIndex+2]} />
            }
            {campingIds[firstIndex+3] &&
              <CampingPreview campingId={campingIds[firstIndex+3]} />
            }
            {campingIds[firstIndex+4] &&
              <CampingPreview campingId={campingIds[firstIndex+4]} />
            }
            {campingIds[firstIndex+5] &&
              <CampingPreview campingId={campingIds[firstIndex+5]} />
            }
            <Pagination 
              currentPage={currentPage}
              lastPage={lastPage}
            />
          </div>
          <Footer />
      </div>  
    );
};

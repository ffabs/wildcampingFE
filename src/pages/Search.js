import Header from '../components/Header';
import Footer from '../components/Footer';
import CampingPreview from '../components/CampingPreview';

function Search() {
  return ( 
    <div>
        <Header /> 
        <div className="search-list">
            <CampingPreview />
            <CampingPreview />
            <CampingPreview />
            <CampingPreview />
            <CampingPreview />
            <CampingPreview />
        </div>
        <Footer />
    </div>  
  );
}

export default Search;

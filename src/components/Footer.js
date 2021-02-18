import '../App.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
        <Link to="/">
            <div className="footer-element"> Homepage</div>
        </Link>
        <Link to="/search">
            <div className="footer-element"> Searchpage</div>
        </Link>
        {/* <div className="footer-element"> Privacy policy </div> */}
    </div>
  );
}

export default Footer;

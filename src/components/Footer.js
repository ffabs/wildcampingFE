import '../App.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
        <a href="/">
            <div className="footer-element"> Homepage</div>
        </a>
        <Link to="/search">
            <div className="footer-element"> Searchpage</div>
        </Link>
        {/* <div className="footer-element"> Privacy policy </div> */}
    </div>
  );
}

export default Footer;

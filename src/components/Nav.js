import React, { Component } from 'react';
import '../App.css';
import './Header.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
    
    render() {
        let searchPage = '';
        let loginPage = '';
        let signupPage= '';
        switch(this.props.page) {
            case "Search":
                searchPage += ' current';
            break;
            case "Login":
                loginPage += ' current';
            break;
            case "Signup":
                signupPage += ' current';
            break;
            case "Camping":
                searchPage = '';
                loginPage = '';
                signupPage= '';
            break;
            default:
                searchPage = '';
                loginPage = '';
                signupPage= '';
        }

      return (        
  
          <div className="">
              <div className="nav">
                {this.props.page !== "Home" &&
                  <Link to="/">
                    <div className="nav">Home</div>
                  </Link>
                }
                <Link to="/search"> 
                  <div className={searchPage+" nav"}>Search wildcamps</div>
                </Link>
                {!this.props.token &&
                  <Link to="/login"> 
                      <div className={loginPage+" nav"}>Log in</div>
                  </Link>
                }
                {!this.props.token &&
                  <Link to="/signup"> 
                      <div className={signupPage+" nav"}>Sign up</div>
                  </Link>
                }
                {this.props.token &&
                    <button onClick={this.props.logoutHandler} className="nav">Log out</button>
                }
              </div>
        </div>
  
      );
      
    }
  
  }
  
  export default Nav;
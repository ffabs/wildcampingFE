import '../App.css';
import './Header.css';
import {Link} from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
  constructor() {
      super();
      this.state = {
          open: false
      };
  }

  handleClick() {
    this.setState({
        open: !this.state.open
    });
  }
  
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
        <div className="App-header">
          <Link to="/"> <p className="header-text">WildPeg</p> </Link>
          <div className="desktop">
              <Link to="/search"> 
                  <div className={searchPage+" header-text header-link"}>Search wildcamps</div>
              </Link>
                {!this.props.token &&
                    <Link to="/login"> 
                        <div className={loginPage+" header-text header-link"}>Log in</div>
                    </Link>
                }
                {!this.props.token &&
                    <Link to="/signup"> 
                        <div className={signupPage+" header-text header-link"}>Sign up</div>
                    </Link>
                }
                {this.props.token &&
                    <button onClick={this.props.logoutHandler} className="header-text header-link">Log out</button>
                }
          </div>
          <div className="hamburger">
              <HamburgerMenu
                  isOpen={this.state.open}
                  menuClicked={this.handleClick.bind(this)}
                  color= "white"
                  // width={18}
                  // height={15}
                  // strokeWidth={1}
                  // rotate={0}
                  // color='black'
                  // borderRadius={0}
                  // animationDuration={0.3}
              />
          </div>

          {this.state.open === true &&
              <div className="mobile"> 
                  <Nav {...this.props}/>
              </div>
          }

        </div>
      );
  }
}

export default Header;



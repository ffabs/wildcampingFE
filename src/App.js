import Home from './pages/Home';
import Search from './pages/Search';
import Camping from './pages/Camping';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact={true} path='/' render={() => (
            <Home />
          )}/>
          <Route exact={true} path='/search' render={() => (
            <Search />
          )}/>
          <Route exact={true} path='/camping' render={() => (
            <Camping />
          )}/>
          <Route render={() => (
            <Redirect to="/" />
          )}/>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

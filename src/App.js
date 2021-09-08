import logo from './logo.svg';
import './App.css';

import BrowseFundraisers from './components/Fundraisers/BrowseFundraisers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <BrowseFundraisers/>
        </Route>
        {/* <Route exact path='/userprofile'>
          <UserProfile/>
        </Route> */}
      </Switch>
      
    </BrowserRouter>
      
    
  );
}

export default App;

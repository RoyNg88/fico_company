import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-select2-wrapper/css/select2.css';
import './App.css';

import Login from "./components/SignPage/Login";
import Admin from './components/AdminPage/Admin';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './common/Navbar';
import Footer from './common/footer';
import NotFound from './common/NotFound';
import Register from './components/SignPage/Register';
import Home from './components/Homepage/Homepage.jsx';


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {isAuthenticated: 0}
  }

  componentWillMount(){
    if (window.sessionStorage.getItem("isAuthenticated") === null) {
      window.sessionStorage.setItem('isAuthenticated', 0)
    }
    this.setState({isAuthenticated: window.sessionStorage.getItem('isAuthenticated')})
  }
  render(){
  return (
    <div>
      <BrowserRouter>
        <Navbar /> 
              <Switch>
                {/* <Route exact path="/fundraisers" component={Fundraisers}/> */}
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/notfound" exact component={NotFound} />
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/aboutus" component={AboutUs}/>
                <Route exact component={NotFound} />
                {/* <Route path="/user" component={Users}/> */}
                {/* <Route path="/admin" component={Admin}/> */}
              </Switch>
          <Footer />
      </BrowserRouter>
    </div>
  );
  }
}


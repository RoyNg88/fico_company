import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

import Login from "./component/SignPage/Login.jsx";
import Navbar from './common/Navbar';
import Admin from './component/AdminPage/Admin';
import ProjectPage from './component/ProjectPage/ProjectPage'
import ProjectForm from './component/ProjectPage/ProjectForm';

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
        <div id="page-container">
          <div id="content-wrap">
            <Switch>
              {/* <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/> */}
            </Switch>
            <div className="container">  
              <Switch>
                {/* <Route exact path="/fundraisers" component={Fundraisers}/>
                <Route path="/fundraisers/:id" component={FundraiserDetail} />
                <Route exact path="/search" component={Fundraisersearch}/>
                <Route path="/Add_courses" component={AddFundraiser}/> */}
                <Route path="/login" component={Login}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/projects" component={ProjectPage} />
                <Route path="/projectform" component={ProjectForm} />
                {/* <Route path="/user" component={Users}/> */}
                {/* <Route path="/admin" component={Admin}/> */}
              </Switch>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </div>
  );
  }
}


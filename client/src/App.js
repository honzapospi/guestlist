import React, { Component } from 'react';
import './App.css';
import Guestlist from './guest/Guestlist.react';
import 'bootstrap/dist/css/bootstrap.css';
import GuestForm from './guest/GuestForm.react';
import {Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new">New</Link></li>
          </ul>
          <Route path="/" exact component={Guestlist} />
          <Route path="/new" component={GuestForm} />
      </div>
    );
  }
}

export default App;

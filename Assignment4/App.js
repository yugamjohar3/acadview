import React, { Component } from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/About' component={ About }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

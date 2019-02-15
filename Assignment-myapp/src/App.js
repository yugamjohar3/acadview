/*import React, { Component } from 'react';
import Display from './Display';
class App extends Component {
  render() {
    return (
      <div>
      <h1>this is my first react app</h1>
      <Display name='John'>
      </div>
    )
  }
}

export default App;*/
/*
import React, { Component } from 'react';
import Display from './Display';


class App extends Component {
  render() {
    return (
      <div className="div1">
        <h1 class="heading">This is my first app.</h1>
        <Display name="Tilak" age='21'/>
      </div>
    );
  }
}

export default App;*/
import React, { Component } from 'react';
//var Display = require('./Display');
import Display from './element1';
import Display2 from './element2';
import './style1.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <h1 className='h1'>Hi  am react app </h1>
      <Display />
      <Display2 name='yugs' age='25'/>
      </div>
    );
  }
}

export default App;

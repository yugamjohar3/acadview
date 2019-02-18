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
/*import React, { Component } from 'react';
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

export default App;*/

import React, { Component } from 'react';
//var Display = require('./Display');
import Display from './element1';
import StateLessDisplay from './element2';
import './style1.css';

import AddInfo from './AddInfo';

class App extends Component {
  state =  { displayInfos:[
                { name:'yugam',age:20,id:1 },
                { name:'john',age:15,id:2 }
            ]
            }

  addInfo=(info)=>{

    console.log('inside app component',info);

    info.id = Math.floor(Math.random()*10);

    console.log(info.id);

    let displayInfos = [...this.state.displayInfos, info];

   this.setState({
     displayInfos: displayInfos
   })

  }

  deleteInfo = (id) => {
      console.log(id);
      let displayInfos = this.state.displayInfos.filter(info => {
        return info.id !== id
      });
      this.setState({
        displayInfos: displayInfos
      })
  }

  render() {
    return (
      <div className='App'>
      <h1 className='h1'>This is my main component ! </h1>
      {/*<Display displayInfos={ this.state.displayInfos }/>*/}
     <StateLessDisplay deleteInfo= {this.deleteInfo} displayInfos={this.state.displayInfos} />
      <AddInfo addInfo={this.addInfo} />
      </div>
    );
  }
}

export default App;

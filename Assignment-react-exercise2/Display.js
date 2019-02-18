/*import React, { Component } from 'react';

class Display extends Component {
  render(){
    return(
      <div>
      <div>name:john</div>
      <div>age 27</div>
      </div>
    )
    }
  }
  export default Display*/
  import React, { Component } from 'react';

class Display extends Component{
    render(){
        console.log(this.props)
        return(
            <div className="content1">
                <div className="header">
                    <h1>Hi! I am React App!</h1>
                    <button>Switch names</button>
                </div>
                <div className="content2">
                    <p>Name:  {this.props.name}</p>
                    <p>Age: {this.props.age}</p>
                    <p>Birth-month: October</p>
                    <form>
                        <input type='text' />
                    </form>
                </div>
            </div>
        );
    }
}

export default Display;

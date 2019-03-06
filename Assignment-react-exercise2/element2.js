<<<<<<< HEAD
import React,{ Component } from 'react';



const StateLessDisplay = (props) => {
  const { displayInfos, deleteInfo } = props; // this is similar to const displayInfos = this.props.displayInfos

  const displayList = displayInfos.map( info => {
  
    return (
      <div className='display-info' key={info.id}>
        <h5>Information of : { info.name }</h5>
        <div> Name: { info.name } </div>
        <div> Age: { info.age } </div>
        <div> Birth-month: { info.birthMonth } </div>
        <button onClick={() => {deleteInfo(info.id)}}> Delete </button>
      </div>
    )
  });

  return(
    <div className='InfoList'>
      { displayList }
    </div>
  )
}

export default StateLessDisplay;
/*import React,{ Component } from 'react';

class Display2 extends Component{
  render(){
    return(
      <div className='div3'>
        <h3 className='h3'>This is yugam and my age is 20</h3>
        <input type="text" name="name" className='input'/>
        <div className='detail'>Name: { this.props.name }</div>
        <div className='detail'>Age: { this.props.age }</div>
      </div>
    )
  }
}

export default Display2;*/
=======
import React,{ Component } from 'react';



const StateLessDisplay = (props) => {
  const { displayInfos, deleteInfo } = props; // this is similar to const displayInfos = this.props.displayInfos

  const displayList = displayInfos.map( info => {
  
    return (
      <div className='display-info' key={info.id}>
        <h5>Information of : { info.name }</h5>
        <div> Name: { info.name } </div>
        <div> Age: { info.age } </div>
        <div> Birth-month: { info.birthMonth } </div>
        <button onClick={() => {deleteInfo(info.id)}}> Delete </button>
      </div>
    )
  });

  return(
    <div className='InfoList'>
      { displayList }
    </div>
  )
}

export default StateLessDisplay;
/*import React,{ Component } from 'react';

class Display2 extends Component{
  render(){
    return(
      <div className='div3'>
        <h3 className='h3'>This is yugam and my age is 20</h3>
        <input type="text" name="name" className='input'/>
        <div className='detail'>Name: { this.props.name }</div>
        <div className='detail'>Age: { this.props.age }</div>
      </div>
    )
  }
}

export default Display2;*/
>>>>>>> bea68f5158a93c9f6b1ff84960a820e13a52748e

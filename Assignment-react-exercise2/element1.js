import React,{ Component } from 'react';

const Display = (props) => {
  

      const displayInfos = props.displayInfos;
      console.log(displayInfos);
      const displayList = displayInfos.map(info=>{
        if( info.age>14 ){
          return(
            <div className='div2' key={info.rollno}>
              <h3 className='h3'>This is {info.rollno} component inside main component</h3>
              <input type="text" name="name" className='input'/>
              <div className='detail'>Name: { info.name }</div>
              <div className='detail'>Age: { info.age }</div>
            </div>
          )
        }
      })
      return(
        <div>{ displayList }</div>
      )

}

export default Display;
/*import React,{ Component } from 'react';

class Display extends Component{
  state={
          name:'yugam',
          age:'20',
          roll:'1990'
        }

  handleChange(e){
    this.setState(
      {
        name:e.target.value,
      }
    )
  }

  render(){
    return(
      <div className='div2'>
        <h3 className='h3'>This is yugam  and my age is 20 </h3>
        <input type="text" name="name" className='input' onChange={ this.handleChange.bind(this) }/>
        <div className='detail'>Name: { this.state.name }</div>
        <div className='detail'>Age: { this.state.age }</div>
      </div>
    )
  }
}

export default Display;*/

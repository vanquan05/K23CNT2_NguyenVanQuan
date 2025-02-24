import React, { Component } from 'react'

class NvqClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvqFullName:"Nguyen Van Quan",
            nvqAge:45,
        }
    }

    /// ham xu ly su kien
    nvqEventHandleClick1 = ()=>{
        alert("FullName: " +this.state.nvqFullName + "\n Age:" + this.state.nvqAge);
    }
  render() {
    return (
        <div className='alert alert-danger'>
         <button className='btn btn-primary' onClick={this.nvqEventHandleClick1}>Button 1 - Du lieu trong state</button>
        </div>
    )
  }
}
export default NvqClassCompEventState;

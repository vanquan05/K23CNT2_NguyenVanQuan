import React, { Component } from 'react'

 class NvqClassCompEventPOostData extends Component {
    constructor(props){
        super(props);
    }
    
    // ham xu ly su kien
    nvqEventHandleClick =()=>{
        // chuyen du lieu len App thong qua props
        this.props.onNvqDataToApp("Du lieu component con - NvqClassCompEventPostData");
    }
  render() {
    return (
      <div className='alert alert-success'>
        <button className='btn btn-primary'
        onClick={this.nvqEventHandleClick}
        >Button1 - chuyen du lieu len App</button>

      </div>
    )
  }
}
export default  NvqClassCompEventPOostData;
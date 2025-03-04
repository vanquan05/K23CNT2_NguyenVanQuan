import React, { Component } from 'react'

 class NvqClassCompEvetProps extends Component {

  // ham su ly su kien
    nvqEventHandleClick1 = ()=>{
    alert("Hello..." +this.props.nvqRenderTile);  
  }
  render() {
    return (
      <div className='alert alert-danger'>
       <button className='btn btn-primary' onClick={this.nvqEventHandleClick1}>Button1</button>
      </div>
    )
  }
}

export default NvqClassCompEvetProps;

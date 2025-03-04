import React, { Component } from 'react'
import NvqLoginComp from './NvqLoginComp'
import NvqLogoutCom from './NvqLogoutCom'

 class NvqLoginControl extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn:false
        }
    }
  render() {
      let{isLoggedIn}=this.state
      let NvqElement = isLoggedIn?<NvqLoginComp/> :<NvqLogoutCom/>    
    return (
      <div>
          {NvqElement}
      </div>
    )
  }
}
export default NvqLoginControl;
import React, { Component } from 'react'
import NvqFuncCompEvent1 from './components/NvqFuncCompEvent1';
import NvqFuncCompEventProps from './components/NvqFuncCompEventProps';
import NvqClassCompEvetProps from './components/NvqClassCompEvetProps';
import NvqClassCompEventState from './components/NvqClassCompEventState';
import NvqClassCompEventPOostData from './components/NvqClassCompEventPOostData';


 class NvqApp extends Component {

    // ham xu ly su kien khi component con chuyen du lieu len
    NvqHandleDateToApp = (content)=>{
        alert(content);
    }
  render() {
     return (
        <div className='container border mt-3'>
            <h1 className='text-cent alert alert-info my-2'>K23CNT2 - Nguyen Van Quan - Event and From</h1>
            <hr/>
            <dv>
                <h2>Functiom Component - Event</h2>
                <NvqFuncCompEvent1 />
            </dv>
            <hr/>
            <div>
                <h2>Class Component - Event</h2>
                <NvqFuncCompEvent1 />
            </div>
            <div>
                <h2>Functiom Component - Event; props</h2>
                <NvqFuncCompEventProps nvqRenderName ="Nguyen Van Quan"/> 
            </div>
            <div>
                <h2>Class Component - Event; props</h2>
                 <NvqClassCompEvetProps nvqRenderTile = "Welcome to Van Quan" />
            </div>

            <div>
                <h2>Class Component - Event; state</h2>
                <NvqClassCompEventState />
                
            </div>
            <div>
                <h2>Class Component - Event; Post Data to App </h2>
                <NvqClassCompEventPOostData onNvqDataToApp={this.NvqHandleDateToApp}/>
                
            </div>
        </div>
    );
  }
}
export default NvqApp;
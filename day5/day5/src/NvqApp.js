import React, { Component } from 'react'
import NvqFuncCompEvent1 from './components/NvqFuncCompEvent1';
import NvqFuncCompEventProps from './components/NvqFuncCompEventProps';
import NvqClassCompEvetProps from './components/NvqClassCompEvetProps';
import NvqClassCompEventState from './components/NvqClassCompEventState';


 class NvqApp extends Component {
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
        </div>
    );
  }
}
export default NvqApp;
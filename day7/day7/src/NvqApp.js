
import React, { Component } from 'react';
import NvqLoginControl from './componets/NvqLoginControl';

class NvqApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='text-center'>Nguyễn Văn Quân - Render condition. List key</h1>
        <hr/>
        <NvqLoginControl/>
      </div>
    );
  }
}

export default NvqApp;

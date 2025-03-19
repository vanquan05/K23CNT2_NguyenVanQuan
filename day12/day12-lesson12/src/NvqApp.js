
import React, { useState } from 'react';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NvqNavNar from './components/NvqNavNar'
import NvqHome from './components/NvqHome'
import NvqAbout from './components/NvqAbout'
import NvqContact from './components/NvqContact'
import NvqListUser from './components/NvqListUser'
import NvqFormUser from './components/NvqFormUser';
export default function NvqApp() {

  const listUsers = [
    {id:"SV001", NvqFullName:"Nguyen Van Quan", NvqUserName:"VanQuan", NvqPass:"123456@"},
    {id:"SV002", NvqFullName:"Nguyen Hai Anh", NvqUserName:"HaiAnh", NvqPass:"123456@"},
    {id:"SV003", NvqFullName:"Nguyen Hai Em", NvqUserName:"HaiEm", NvqPass:"123456@"},
  ]

  const[NvqUsers, setNvqUsers] = useState(listUsers)
  // Ham su li su kien them moi
  const NvqHandleAdd = (NvqParam)=>{
    console.log("NvqHandleAdd:", NvqParam);

    setNvqUsers(prev =>{
      return [
        ...prev,
        NvqParam
      ]
    })

  }


  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Nguyen Van Quan - K23CNT2]</h1>
        <hr/>
      <Router>
        <NvqNavNar />
        <Routes>
           <Route path='/' element = {<NvqHome />} /> 
           <Route path='/about' element = {<NvqAbout />} /> 
           <Route path='/contact' element = {<NvqContact />} />
           <Route path='/list-user' element = {<NvqListUser renderNvqUsers={NvqUsers}/>} />
           <Route path='/create-user' element = {<NvqFormUser onNvqAddNew={NvqHandleAdd}/>} />
        </Routes>
      </Router>
    </div>
  )
}

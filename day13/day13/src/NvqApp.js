import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NvqListUsers from './components/NvqListUsers';
import NvqNavBar from './components/NvqNavBar';
import NvqHome from './components/NvqHome';
import NvqCreateUser from './components/NvqCreateUser';
import NvqEditUser from './components/NvqEditUser';

export default function NvqApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1>Nguyễn Văn Quân - Mini Project</h1>
      <Router >
          <NvqNavBar />
          <hr/>
          <Routes>
            <Route path='/' element={<NvqHome></NvqHome>} />
            <Route path='/list-user' element={<NvqListUsers />} />
            <Route path='/create-user' element={<NvqCreateUser />} />
            <Route path='/edit-user/:id' element={<NvqEditUser />} />
          </Routes>
      </Router>
        
    </div>
  )
}

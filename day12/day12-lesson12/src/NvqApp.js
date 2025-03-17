
import React, { Suspense, lazy } from 'react';
import {Link, Route, Routes, BrowserRouter  as Router, Navigate} from 'react-router-dom'
import NvqHome from './components/NvqHome'
import NvqAbout from './components/NvqAbout'
import NvqContact from './components/NvqContact'
const NvqDashboard = lazy(() => import('./components/NvqDashboard'));
const isAuthenticated = false;  // Giả sử người dùng chưa đăng nhập
const ProtectedRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/about" />;
};
export default function NvqApp() {
  return (
    <div className='container border my-3'>
        <h1>React Router Demo</h1>
        <hr />
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </nav>
            <Suspense fallback={<div>Loading...</div>}> 
            <div className='alert alert-danger'>
              <Routes>
                  <Route path="/" element={<NvqHome />} />
                  <Route path="/about" element={<NvqAbout />} />
                  <Route path="/contact" element={<NvqContact />} />
                  <Route path="/dashboard" element={<ProtectedRoute element={<NvqDashboard />} />} />

              </Routes>
            </div>
            </Suspense>
          </div>
        </Router>
    </div>
  )
}

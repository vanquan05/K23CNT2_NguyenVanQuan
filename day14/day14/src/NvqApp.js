import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NvqNavBar from './components/NvqNavBar';
import NvqHome from './components/NvqHome';
import NvqListUsers from './components/NvqListUsers';
import NvqCreateUser from './components/NvqCreateUser';
import NvqEditUser from './components/NvqEditUser';


export default function NvqApp() {
    return (
        <Router>
            <div>
                <NvqNavBar />
                <Routes>
                    <Route path="/" element={<NvqHome />} />
                    <Route path="/users" element={<NvqListUsers />} />
                    <Route path="/add-user" element={<NvqCreateUser />} />
                    <Route path="/edit-user/:id" element={<NvqEditUser />} />
                </Routes>
            </div>
        </Router>
    );
}

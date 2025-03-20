
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NvqCreateUser() {
    const [user, setUser] = useState({ NvqName: '', NvqEmail: '', NvqPhone: '', NvqActive: true });
    const navigate = useNavigate();
    const apiUrl = "http://localhost:3001/users";

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser({ ...user, [name]: type === 'checkbox' ? checked : value });
    };

    const handleRadioChange = (value) => {
        setUser({ ...user, NvqActive: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(apiUrl, user)
            .then(() => navigate('/users'))
            .catch(error => console.log("Lỗi khi thêm user", error));
    };

    return (
        <div className="container">
            <h2 className="header">Thêm mới thông tin User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="NvqName" value={user.NvqName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="NvqEmail" value={user.NvqEmail} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" name="NvqPhone" value={user.NvqPhone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Active</label>
                    <div className="radio-group">
                        <input
                            type="radio"
                            name="NvqActive"
                            checked={user.NvqActive === true}
                            onChange={() => handleRadioChange(true)}
                        />
                        <label style={{ color: "green", marginRight: "10px" }}>Hoạt động</label>

                        <input
                            type="radio"
                            name="NvqActive"
                            checked={user.NvqActive === false}
                            onChange={() => handleRadioChange(false)}
                        />
                        <label style={{ color: "red" }}>Đang khóa</label>
                    </div>
                </div>
                <button type="submit">Create</button>
                <button type="button" onClick={() => navigate('/users')}>Back</button>
            </form>
        </div>
    );
}

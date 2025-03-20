
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function NvqEditUser() {
    const { id } = useParams();
    const [user, setUser] = useState({ NvqName: '', NvqEmail: '', NvqPhone: '', NvqActive: true });
    const navigate = useNavigate();
    const apiUrl = `http://localhost:3001/users/${id}`;

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => setUser(response.data))
            .catch(error => console.log("Lỗi khi lấy dữ liệu", error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser({ ...user, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(apiUrl, user)
            .then(() => navigate('/users'))
            .catch(error => console.log("Lỗi khi cập nhật user", error));
    };

    return (
        <div>
            <h2>Sửa thông tin User</h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input type="text" name="NvqName" value={user.NvqName} onChange={handleChange} required />
                <label>Email</label>
                <input type="email" name="NvqEmail" value={user.NvqEmail} onChange={handleChange} required />
                <label>Phone</label>
                <input type="text" name="NvqPhone" value={user.NvqPhone} onChange={handleChange} required />
                <button type="submit">Update</button>
                <button type="button" onClick={() => navigate('/users')}>Back</button>
            </form>
        </div>
    );
}

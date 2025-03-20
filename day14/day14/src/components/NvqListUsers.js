
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NvqListUsers() {
    const [users, setUsers] = useState([]);
    const apiUrl = "http://localhost:3001/users";

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => setUsers(response.data))
            .catch(error => console.log("Lỗi khi lấy dữ liệu", error));
    }, []);

    return (
        <div>
            <h2>Danh sách User</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.Nvqid}</td>
                            <td>{user.NvqName}</td>
                            <td>{user.NvqEmail}</td>
                            <td>{user.NvqPhone}</td>
                            <td>
                                <span className={user.NvqActive ? "badge bg-success" : "badge bg-danger"}>
                                    {user.NvqActive ? "Hoạt động" : "Khóa"}
                                </span>
                            </td>
                            <td>
                                <button className='btn btn-warning'>Edit</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

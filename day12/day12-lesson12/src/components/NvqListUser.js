
import React from 'react';

export default function NvqListUser({ renderNvqUsers }) {
  return (
    <div>
      <h2>Danh sách tài khoản</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {renderNvqUsers.map((NvqItem, index) => (
            <tr key={NvqItem.id}>
              <td>{index + 1}</td>
              <td>{NvqItem.id}</td>
              <td>{NvqItem.NvqFullName}</td>
              <td>{NvqItem.NvqUserName}</td>
              <td>{NvqItem.NvqPass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

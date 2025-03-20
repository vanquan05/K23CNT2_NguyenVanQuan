
import React from 'react';
import { Link } from 'react-router-dom';

export default function NvqNavBar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Trang chủ</Link> |
      <Link to="/users" style={{ marginLeft: '15px', marginRight: '15px' }}>Danh sách User</Link> |
      <Link to="/add-user" style={{ marginLeft: '15px' }}>Thêm mới User</Link>
    </nav>
  );
}

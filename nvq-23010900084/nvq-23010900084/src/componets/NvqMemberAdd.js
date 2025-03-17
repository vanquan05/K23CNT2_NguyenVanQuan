import React, { useState } from "react";

const NvqMemberAdd = ({ onAddMember }) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullname || !username || !password) return;

    onAddMember({ fullname, username, password });
    setFullname("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="add-member-form">
      <h2>Thêm Thành Viên</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Họ và Tên"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tên Đăng Nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật Khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default NvqMemberAdd;
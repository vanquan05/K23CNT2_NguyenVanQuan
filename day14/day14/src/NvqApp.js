import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://YOUR_MOCKAPI_URL/nvq_users";

function NvqApp() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ nvq_name: "", nvq_email: "", nvq_phone: "", nvq_active: false });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`${API_URL}/${editingId}`, form);
    } else {
      await axios.post(API_URL, form);
    }
    setForm({ nvq_name: "", nvq_email: "", nvq_phone: "", nvq_active: false });
    setEditingId(null);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setForm(user);
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <form onSubmit={handleSubmit}>
        <input name="nvq_name" value={form.nvq_name} onChange={handleChange} placeholder="Name" required />
        <input name="nvq_email" value={form.nvq_email} onChange={handleChange} placeholder="Email" required />
        <input name="nvq_phone" value={form.nvq_phone} onChange={handleChange} placeholder="Phone" required />
        <label>
          Active:
          <input type="checkbox" name="nvq_active" checked={form.nvq_active} onChange={handleChange} />
        </label>
        <button type="submit">{editingId ? "Update" : "Add"}</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nvq_name} - {user.nvq_email} - {user.nvq_phone} - Active: {user.nvq_active.toString()}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NvqApp;

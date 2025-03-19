import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function NvqCreateUser() {
  
  let Nvquser = {
    id:'',
    Nvq_name:"",
    Nvq_email:"",
    Nvq_phone:"",
    Nvq_active:false
  }

  const [Nvq_user, setNvqUser] = useState(Nvquser)
  const NvqApiUrl = "https://67d8eaf600348dd3e2a8b4ba.mockapi.io/Nvq_users"
  
  const navigate = useNavigate();

  const NvqHandleSubmit = (event)=>{
    event.preventDefault();
    console.log(Nvq_user);
    axios
      .post(NvqApiUrl, Nvq_user)
      .then((response) => {
        navigate('/list-user')
      })
      .catch((error) => console.log('Lỗi khi thêm user.'));

  }

  const NvqHandleBack=(event)=>{
    event.preventDefault();
    navigate('/list-user')
  }
  return (
    <div>
      <h2 className="alert alert-success">Thêm mới thông tin User</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="Nvq_name" className="col-sm-2 col-form-label">
            Full Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="Nvq_name"
              name="Nvq_name"
              value={Nvq_user.Nvq_name}
              onChange={(ev)=>setNvqUser({...Nvq_user,Nvq_name:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Nvq_email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              id="Nvq_email"
              name="Nvq_email"
              value={Nvq_user.Nvq_email}
              onChange={(ev)=>setNvqUser({...Nvq_user,Nvq_email:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Nvq_phone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-6">
            <input
              type="tel"
              className="form-control"
              id="Nvq_phone"
              name="Nvq_phone"
              value={Nvq_user.Nvq_phone}
              onChange={(ev)=>setNvqUser({...Nvq_user,Nvq_phone:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Nvq_active" className="col-sm-2 col-form-label">
            Active
          </label>
          <div className="col-sm-6">
            <input
              type="radio"
              id="Nvq_active_true"
              name="Nvq_active"
              value={'true'}
              onChange={(ev)=>setNvqUser({...Nvq_user,Nvq_active:ev.target.value})} 
            /> <label htmlFor="Nvq_active_true" className="mx-2 text-success">Hoạt động</label>
            <input
              type="radio"
              id="Nvq_active_false"
              name="Nvq_active"
              value={'false'}
              onChange={(ev)=>setNvqUser({...Nvq_user,Nvq_active:ev.target.value})} 
            /> <label htmlFor="Nvq_active_false" className="mx-2 text-danger">Đang khóa</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6">
            <button className="mx-1" onClick={NvqHandleSubmit}>Create</button>
            <button className="px-3" onClick={NvqHandleBack}>Back</button>
          </div>
        </div>
      </form>
    </div>
  );
}
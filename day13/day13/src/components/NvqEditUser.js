
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function NvqEditUser() {
  // api
  const NvqApiUrl = "https://67d8eaf600348dd3e2a8b4ba.mockapi.io/Nvq-miniproject/Nvq_users/";
  // lấy biến id trên url;
  const {id} = useParams(); // <Route path='/edit-user/:id' element={<NvqEditUser />} />; navigate(`/edit-user/${NvqId}`);
  // Khởi tạo state cho componnet
  const [Nvq_editUser, setNvqEditUser] = useState({
    Nvq_name:'', Nvq_email:'', Nvq_phone:'', Nvq_active:false
  })
  // đọc dữ liệu từ api và set cho state: Nvq_editUser
  useEffect(()=> {
    axios
      .get(NvqApiUrl+`${id}`)
      .then((Nvq_response) => {
        const editUser = Nvq_response.data;
        setNvqEditUser(editUser);
      })
      .catch((error) => {
        console.error('Lỗi khi tải công việc:', error);
      });
  },[id])
 
  // Hàm xử lý khi người dùng thay đổi trạng thái Active (radio button)
  const NvqHandleRadioChange = (ev) => {
    setNvqEditUser({
      ...Nvq_editUser,
      Nvq_active: ev.target.value, // Cập nhật trạng thái Nvq_active theo giá trị của radio button
    });
  };
  // tạo navigate từ react router dom để điều hướng khi cập nhật thành công hoặc back
  const navigate = useNavigate();

  // Khi người dùng nhấn nút submit (cập nhật dữ liệu) => lấy dữ liệu từ form, post vào api
  // Hàm cập nhật những thay đổi trên form vào api
  const NvqHandleSubmit = (event)=>{
    event.preventDefault()
    axios
      .put(NvqApiUrl+`${id}`, Nvq_editUser)
      .then((Nvq_response) => {
        alert('Cập nhật thành công!');
        navigate('/list-user'); // Sau khi lưu, chuyển về trang danh sách
      })
      .catch((error) => {
        console.error('Lỗi khi cập nhật công việc:', error);
      });
  }

  // khi click vào nút back
  const NvqHandleBack=(event)=>{
    event.preventDefault();
    navigate('/list-user')
  }
  return (
    <div>
      <h2 className="alert alert-success">Sửa thông tin User</h2>
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
              value={Nvq_editUser.Nvq_name}
              onChange={(ev)=>setNvqEditUser({...Nvq_editUser,Nvq_name:ev.target.value})} 
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
              value={Nvq_editUser.Nvq_email}
              onChange={(ev)=>setNvqEditUser({...Nvq_editUser,Nvq_email:ev.target.value})} 
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
              value={Nvq_editUser.Nvq_phone}
              onChange={(ev)=>setNvqEditUser({...Nvq_editUser,Nvq_phone:ev.target.value})} 
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
              checked={Nvq_editUser.Nvq_active == 'true' || Nvq_editUser.Nvq_active===true} // Kiểm tra nếu giá trị là "true"
              onChange={NvqHandleRadioChange} 
              /> <label htmlFor="Nvq_active_true" className="mx-2 text-success">Hoạt động</label>
            <input
              type="radio"
              id="Nvq_active_false"
              name="Nvq_active"
              value={'false'}
              checked={Nvq_editUser.Nvq_active === 'false' || Nvq_editUser.Nvq_active===false} // Kiểm tra nếu giá trị là "false"
              onChange={NvqHandleRadioChange} 
              /> <label htmlFor="Nvq_active_false" className="mx-2 text-danger">Đang khóa</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6">
            <button className="mx-1" onClick={NvqHandleSubmit}>Update</button>
            <button className="px-3" onClick={NvqHandleBack}>Back</button>
          </div>
        </div>
      </form>
    </div>
  )
}

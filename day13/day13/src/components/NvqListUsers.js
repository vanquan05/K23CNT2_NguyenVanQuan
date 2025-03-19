import React from 'react'
import NvqAxiosUsers from './api/nvq_api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NvqListUsers() {
    const navigate = useNavigate();
    const [NvqListUser, setNvqListUser] = useState([]);
    const NvqGetAllUser = async()=>{
        //Goi API lay du lieu
        const Nvq_resp = await NvqAxiosUsers.get("/Nvq_users");
        setNvqListUser(Nvq_resp.data);
    }
    
    // Gọi API và lấy dữ liệu cho biến state (NvqListUser)
    useEffect(()=>{
        NvqGetAllUser()
    },[])

    const NvqHandleUpdate = (NvqId)=>{
        navigate(`/edit-user/${NvqId}`);
    }
    const NvqHandleDelete = async (NvqId)=>{
        if(window.confirm('Bạn có muốn xóa không?')){
            await NvqAxiosUsers.delete("/Nvq_users/"+NvqId);

            let NvqListUserDelete = NvqListUser.filter(x=>x.id !=NvqId);
            setNvqListUser(NvqListUserDelete);
        }
    }
    // tạo hiển thị active
    const NvqActiveElement = (flag)=>{
        if(flag===true || flag =="true")
            return <span class='badge text-bg-success'>Hoạt động </span>
        else
            return <span class='badge text-bg-danger'>Khóa </span>
    }
    // duyệt dữ liệu từ state và hiển thị
    const NvqElementUser = NvqListUser.map((Nvq_user)=>{
        return <tr key={Nvq_user.id}>
            <td className='text-center'>{Nvq_user.id}</td>
            <td>{Nvq_user.Nvq_name}</td>
            <td>{Nvq_user.Nvq_email}</td>
            <td>{Nvq_user.Nvq_phone}</td>
            <td>
                {
                    NvqActiveElement(Nvq_user.Nvq_active)
                }
            </td>
            <td className='text-center'>
                <button onClick={()=>NvqHandleUpdate(Nvq_user.id)} className='mx-1 px-3'>Edit</button>
                <button onClick={()=>NvqHandleDelete(Nvq_user.id)} className='mx-1'>Delete</button>
            </td>
        </tr>
    })

  return (
    <div>
        <table className='table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {NvqElementUser}
                </tbody>
            </table>
    </div>
  )
}

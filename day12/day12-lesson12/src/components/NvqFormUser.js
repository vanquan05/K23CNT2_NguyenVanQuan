
import React, { useState } from 'react';

export default function NvqFormUser({ onNvqAddNew }) {
  const [NvqId, setNvqId] = useState('');
  const [NvqFullname, setNvqFullName] = useState('');
  const [NvqUser, setNvqUser] = useState('');
  const [NvqPass, setNvqPass] = useState('');

  const NvqHandleSubmit = (event) => {
    event.preventDefault();
    console.log(NvqId, NvqFullname, NvqUser, NvqPass);

    if (onNvqAddNew) {
      onNvqAddNew({
        id: NvqId, 
        NvqFullName: NvqFullname, 
        NvqUserName: NvqUser,
        NvqPass: NvqPass
      });

      
      setNvqId('');
      setNvqFullName('');
      setNvqUser('');
      setNvqPass('');
    }
  };

  return (
    <div>
      <form>
        <p>Mã sinh viên:
          <input type="text" value={NvqId} onChange={(ev) => setNvqId(ev.target.value)} />
        </p>
        <p>Họ và tên:
          <input type="text" value={NvqFullname} onChange={(ev) => setNvqFullName(ev.target.value)} />
        </p>
        <p>Tài khoản:
          <input type="text" value={NvqUser} onChange={(ev) => setNvqUser(ev.target.value)} />
        </p>
        <p>Mật khẩu:
          <input type="password" value={NvqPass} onChange={(ev) => setNvqPass(ev.target.value)} />
        </p>
        <p>
          <button type="button" onClick={NvqHandleSubmit}>Save</button>
        </p>
      </form>
    </div>
  );
}

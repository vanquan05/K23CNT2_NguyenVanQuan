import React from "react";
const NvqCompInfor = ({info}) => {
  return (
    <div>
      <h2>Thông Tin Cá Nhân</h2>
      <p><strong>Họ và tên:</strong> {info.fullName}</p>
      <p><strong>Tuổi:</strong> {info.phone}</p>
      <p><strong>Địa chỉ:</strong> {info.className}</p>
    </div>
  );
};
export default NvqCompInfor;
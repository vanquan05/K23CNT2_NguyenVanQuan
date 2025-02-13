import React from "react";
const HvtCompInfor = ({ name, age, address }) => {
  return (
    <div>
      <h2>Thông Tin Cá Nhân</h2>
      <p><strong>Họ và tên:</strong> {name}</p>
      <p><strong>Tuổi:</strong> {age}</p>
      <p><strong>Địa chỉ:</strong> {address}</p>
    </div>
  );
};
export default HvtCompInfor;
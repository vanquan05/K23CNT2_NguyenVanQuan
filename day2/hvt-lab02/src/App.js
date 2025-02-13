import React from "react";
import { HvtCompInfor } from "./HvtCompInfor";

function App() {
  const studentInfo = {
    fullName: "Nguyễn Văn Quan",
    studentId: "2310900084",
    birthDate: "13/06/2005",
    phone: "0123456789",
    className: "KTPM2023"
  };

  return (
    <div className="App">
      <h1>Thông tin cá nhân</h1>
      <HvtCompInfor info={studentInfo} />
    </div>
  );
}
export default App;



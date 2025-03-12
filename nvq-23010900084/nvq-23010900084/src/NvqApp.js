
import React, { Component } from "react";
import NvqMemberList from "./components/NvqMemberList";
import NvqMemberAdd from "./components/NvqMemberAdd";

class NvqApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      NvqStudents:[
        {NvqId:"SV001",NvqStudentName:"Nguyễn Văn Quân",NvqAge:46,NvqGender:"Nam",NvqBirthday:"13/06/2005",NvqBirthPlace:"HN",NvqAddress:"Tòa VCN, 25 Vũ Ngọc Phan"},
        {NvqId:"SV002",NvqStudentName:"Chu Nguyên Chương",NvqAge:188,NvqGender:"Nữ",NvqBirthday:"25/05/1179",NvqBirthPlace:"HP", NvqAddress:"Trung quốc"},
        {NvqId:"SV003",NvqStudentName:"Tần Thủy Hoàng",NvqAge:55,NvqGender:"Nam",NvqBirthday:"25/05/1079",NvqBirthPlace:"TpHCM", NvqAddress:"Trung Quốc"},
        {NvqId:"SV004",NvqStudentName:"Hoàng Thùy Linh",NvqAge:55,NvqGender:"Nam",NvqBirthday:"25/05/1079",NvqBirthPlace:"TpHCM", NvqAddress:"Hồ chí minh"},
      ],
      nvqStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  NvqHandleView = (NvqStudent)=>{
    this.setState({
      NvqStudent:NvqStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.NvqStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Nguyên Van Quan - K23CNT2 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <NvqMemberList  />
                {/* danh sách sinh vien  */}
                <NvqStudentList  renderNvqStudents={this.state.NvqStudents} onNvqHandleView={this.nvqHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <NvqMemberAdd  renderNvqStudent = {this.state.nvqStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NvqApp;


import React, { Component } from "react";
import NvqStudent from "./NvqStudent";

class NvqStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    nvqHandleView = (nvqStudent)=>{
        // Chuyển dữ liệu lên TvcApp
        this.props.onNvqHandleView(nvqStudent);
    }


  render() {
    // lấy dữ liệu trong props từ TvcApp chuyển xuống
    let {renderNvqStudents} = this.props;
    console.log("List:",renderNvqStudents);
    
    // chuyển dữ liệu vào TvcStudent để hiển thị
    let nvqElementStudent = renderNvqStudents.map((nvqItem,index)=>{
        return <NvqStudent key={index} renderNvqStudent={nvqItem} onNvqHandleView={this.NvqHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {nvqElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NvqStudentList;

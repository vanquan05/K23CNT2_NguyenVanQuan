
import React, { Component } from "react";

class NvqStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    nvqHandleView = (nvqStudent)=>{
        // Chuyển lên TvcStudentList
        this.props.onNvqHandleView(nvqStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ TvcStudentList
    let {renderNvqStudent, key} = this.props;
    console.log("Student:",renderNvqStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderNvqStudent.nvqId}</td>
          <td>{renderNvqStudent.nvqStudentName}</td>
          <td>{renderNvqStudent.nvqAge}</td>
          <td>{renderNvqStudent.nvqGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.nvqHandleView(renderNvqStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default NvqStudent;

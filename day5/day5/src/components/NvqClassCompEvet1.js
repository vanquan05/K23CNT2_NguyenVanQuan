import React, { Component } from 'react'

 class NvqClassCompEvet1 extends Component {
    // Ham xu ly su kien 
    nvqEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }

    nvqEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name="+name);
    }

        render() {
            return (
          <div className="alert alert-danger">
           <button className='btn btn-primary mx-1' onClick={this.nvqEventHandleClick1}>Button 1</button>
           <button className='btn btn-success mx-1' 
              onCLick={()=>this.nvqEventHandleClick2("Nguyen Van Quan")}>Button 2</button>
         </div>
                );
    }
}
export default NvqClassCompEvet1; 
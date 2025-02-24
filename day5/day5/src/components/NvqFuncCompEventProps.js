import React from 'react'

export default function NvqFuncCompEventProps(props) {
    // ham su ly su kien
    const nvqHanldeButtonClick1 = ()=>{
        alert("Du lieu tu props:" + props.NvqRenderName);
        console.log("Xin chao ",props.NvqRenderName);
    }
    const nvqHanldeButtonClick2 = (param)=>{
        // lay du lieu props
        alert("Du lieu tu props (Button 2 click):" + props.NvqRenderName);
        // du lieu tham so
        console.log('=============');
        console.log("Hi:", param);
        console.log('=============');
    }
  return (
    <div className="alert alert-info">
        <button className='btn btn-primary mx-1'
        onClick={nvqHanldeButtonClick1}>Button 1</button>

        <button className='btn btn-primary mx-1'
        onClick={()=>nvqHanldeButtonClick2("Button 2")}>Button 2</button>
    </div>
  )
}

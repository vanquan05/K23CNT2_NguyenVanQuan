import React from 'react'

 function NvqFuncCompEvent1() {

    // HAM SU LY SU KIEN
     const nvqEventButton1Click = () => {
        alert("Button 1 - Clicked");

    };

     const nvqEventButton2Click = () => {
        alert("Button 2 - Clicked");
    };
    
    const nvqEventButton3Click = (name) => {
        alert("Name:" +name);
    }
  return (
    <div className="alert alert-info">
     {/*<button className='btn btn-primary' onClick={nvqEventButton1Click()}> 
        Button1
        </button> */}
     <button className='btn btn-primary' onClick={nvqEventButton2Click()}>
        Button2
        </button>
       {/* <button className='btn btn-success' onClick={nvqEventButton3Click("Van Quan")}>
        Button3
        </button> */}
        <button className='btn btn-success' onClick={()=>nvqEventButton3Click("Nguyen Van Quan")}>
        Button4
        </button>
    </div>
  );
}
export default NvqFuncCompEvent1;
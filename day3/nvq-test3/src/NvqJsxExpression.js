import React from 'react'

const NvqJsxExpression = () => {
    // bien
    const name="Nguyen Van Quan";
     // bien doi tuong
    const user ={
       firstName:"Van",
       lastName:"Quan"
    }
    /// ham
    const fullName=(user)=>{
      return user.firstName + '  ' + user.lastName;
    }
    //element
    const element =(
        <div>
            {/*bieu doi jsx */}
            <h2>{fullName(user)}</h2>
            <hr/>
             <h3>welcome to, {name}</h3>
        </div>
    );

    // ham
    const sayWelcome = (name)=>{
        if(name){
          return <h3>Welcome to {name}</h3>
        }else{
          return <h3>Welcome to Fit-NTU -K23CNT2</h3>
        }
    }
  return (
    <div>
       <h1>NVQ - JSX Expession</h1>
       {/* sung dung bien emlent */}
       {element}

      <hr/>
      {sayWelcome()}
      <hr/>
      {sayWelcome("Nguyen Van Quan")}
    </div>
  )
}

export default NvqJsxExpression;

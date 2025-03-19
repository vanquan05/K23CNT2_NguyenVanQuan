import React from 'react'
import {Link} from 'react-router-dom'
function NvqNavNar() {
  return (
    <div>
       <ul>
           <Link to={"/"}>Home</Link> |
           <Link to={"/about"}>About Us</Link> |
           <Link to={"/contact"}>Contact</Link> |
           <Link to={"/list-user"}>List User</Link> |
           <Link to={"/create-user"}>Create User</Link>
       </ul>
    </div>
  )
}
export default NvqNavNar;
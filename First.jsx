import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { BsBookmarkDash } from "react-icons/bs";
import { CiMedicalMask } from "react-icons/ci";
export default function First(props) {
  return (
    <div style={{marginLeft:"22%"}}>
      <nav className="navbar navbar-light bg-light">
  <div className="container-fluid"style={{paddingTop:"0%"}}>
    
    <form className="d-flex"style={{width:"40%",height:"40px"}}>
      <input className="form-control me-2" type="search" placeholder="Search by concepts, lectures, assignment etc..."style={{fontSize:"16px"}}/>

    </form>
    <p style={{color:"black",paddingRight:"10%",fontSize:"18px"}}>Walkthrough</p>
    <CiMedicalMask  style={{fontSize:"30px"}}/>
    <BsBookmarkDash />
    <MdOutlineMessage/>
    <AiOutlineBell />
  </div>
  
</nav>
    </div>
  )
}


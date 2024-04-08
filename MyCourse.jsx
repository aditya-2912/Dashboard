import React from 'react'
import { TbBinaryTree } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
export default function MyCourse(props) {  var navigate = useNavigate()
  return (
    <div onClick={() => navigate('/dashboard/Dsa')}>

       <div className='dsa-title'>
            <h3 style={{fontFamily:"sans-serif",fontWeight:"bold"}}>
                Practice Tests
            </h3>
        </div>
        <div className='dsa-para'>
        
            <p style={{fontFamily:"sans-serif",fontSize:"20px"}}>Select a topic you wish to practice</p>

        </div>

        <div class="row">
  <div classname="col-sm-12"style={{paddingLeft:"420px",paddingTop:"10px",fontFamily:"sans-serif"}}>
    <div className="card">
      <div className="card-body"style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}>
      <TbBinaryTree style={{color:"blue",width:"70px",fontSize:"35px",fontFamily:"sans-serif"}} />
        
        <h4 className="card-title"style={{color:"black",fontFamily:"sans-serif"}}>DSA</h4>
        <p className="card-text"style={{paddingTop:"2px",fontFamily:"sans-serif"}}>With supporting text below as a natural lead-in to additional content.</p>
        
      </div>
      </div>
      </div>
      </div>
          </div>
   
  )
}



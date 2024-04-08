import React from 'react'
import { LiaUserCircleSolid } from "react-icons/lia";
import { FaGraduationCap } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { GrCertificate } from "react-icons/gr";
import { GiAchievement } from "react-icons/gi";
import { FaRegFaceGrinStars } from "react-icons/fa6";

export default function More(props) {
  return (
    <div style={{marginLeft:"25%"}}>
      <div className='detailscontainer'style={{display:"flex"}} >
      <div style={{padding:"30px"}}><div style={{fontSize:"10px",backgroundColor:"lightgray",width:"400px",height:"600px",paddingLeft:"30px",paddingTop:"5px"}}>
        <h1 style={{color:"#1e90ff",fontSize:"25px",fontFamily:"sans-serif"}}> <LiaUserCircleSolid  style={{fontSize:"20px"}}/>Personal Details</h1><br/>
        
        <h1 style={{fontSize:"25px",paddingTop:"24px"}}><FaGraduationCap style={{fontSize:"18px"}}/>Education</h1><br/>
        <h1  style={{fontSize:"25px",paddingTop:"24px"}} ><FaProjectDiagram style={{fontSize:"18px"}} />Projects</h1><br/>
        <h1  style={{fontSize:"25px",paddingTop:"24px"}} ><BsCheck2Circle style={{fontSize:"18px"}}/>Experience</h1><br/>
        <h1 style={{fontSize:"25px",paddingTop:"24px"}}><CiStar style={{fontSize:"18px"}} />Skill & Intrests</h1><br/>
        <h1 style={{fontSize:"25px",paddingTop:"24px"}}> <GrCertificate style={{fontSize:"18px"}} />Certifications</h1><br/>
        
        <h1 style={{fontSize:"25px",paddingTop:"24px"}}><GiAchievement style={{fontSize:"18px"}} />Achievements</h1></div><br/>
        <button type="button" class="btn btn-primary"style={{width:"250px",height:"65px",fontWeight:"bold",fontSize:"18px"}}><FaRegFaceGrinStars style={{fontSize:"25px",color:"black"}} />GENERATE RESUME</button>

      </div>
    <div style={{paddingLeft:"200px"}}>
   <div style={{display:"flex",justifyContent:"space-around",width:"800px",fontFamily:"sans-serif"}}>
    <div style={{fontWeight:"bold",color:"#1e90ff ",marginTop:"15px",fontSize:"35px",fontFamily:"sans-serif"}}>
      Personal Details    
    </div> 
    <p style={{color:"#696969"}}>Saved</p>
    </div>
    <div style={{color:"#696969",fontWeight:"bold",fontSize:"20px"}}>
        1 of 7
    </div>
    <div style={{width:"100px",height:"100px",background:"#00a877",borderRadius:"100%",cursor:"pointer"}}>

    </div>
    <div className='field'>
    <label style={{marginTop:"25px",fontFamily:"arial",fontFamily:"sans-serif",fontSize:"15px",fontWeight:"bold",paddingtop:"15px"}}>Full Name</label>
   <input type="text" name="Full Name" placeholder='Please enter Full Name'style={{display:"block",width:"55%",marginTop:"15px",border:"3px solid #1e90ff ",boxSizing:"border-box",paddingLeft:"15px",fontSize:"15px",paddingBottom:"8px",paddingTop:"8px",borderRadius:"15px"}}/>
    </div>
    <br/>
    <div className='field'>
        <label style={{fontWeight:"bold",paddingTop:"0px",fontFamily:"sans-serif"}}>Professional Summary</label>
        <input type='text' name="professional summary" placeholder='Enter professional summary' style={{display:"block",width:"55%",height:"90px",border:"3px solid #1e90ff",paddingTop:"8px",paddingLeft:"10px"}}/>
    </div>
    <br/>
    <div className='field'>
    <label style={{marginTop:"25px",fontFamily:"sans-serif",fontSize:"15px",fontWeight:"bold",paddingTop:"0px"}}>Email</label>
   <input type="text" name="email" placeholder='Enter email'style={{display:"block",width:"55%",marginTop:"15px",border:"3px solid #1e90ff ",boxSizing:"border-box",paddingLeft:"15px",fontSize:"15px",paddingBottom:"8px",paddingTop:"8px",borderRadius:"15px"}}/>
    </div>
    <br/>
    <div className='field'>
    <label style={{marginTop:"25px",fontFamily:"sans-serif",fontSize:"15px",fontWeight:"bold",paddingTop:"0px"}}>Github Username</label>
   <input type="text" name="Github Username" placeholder='Enter Github Username'style={{display:"block",width:"55%",marginTop:"15px",border:"3px solid #1e90ff ",boxSizing:"border-box",paddingLeft:"15px",fontSize:"15px",paddingBottom:"8px",paddingTop:"8px",borderRadius:"15px"}}/>
    </div>
    <br/>
    <div className='field'>
    <label style={{marginTop:"25px",fontFamily:"sans-serif",fontSize:"15px",fontWeight:"bold",paddingTop:"0px"}}>Enter Location</label>
   <input type="text" name="location" placeholder='City, State'style={{display:"block",width:"55%",marginTop:"15px",border:"3px solid #1e90ff ",boxSizing:"border-box",paddingLeft:"15px",fontSize:"15px",paddingBottom:"8px",paddingTop:"8px",borderRadius:"15px"}}/>
    </div>
    <br/>
    <button type="button" class="btn btn-primary"style={{fontWeight:"bold",width:"130px"}}>CONTINUE</button>

   </div>
   </div>
   </div>
    
  )
}



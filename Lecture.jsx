import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Lecture() {
  return (
    <div style={{marginLeft:"26%",paddingTop:"0%"}}>
<div className='nav-assignment'>
            <div className="btn-group" role="group" aria-label="Basic example"style={{width:"600px",height:"50px",borderRadius:"20px solid black",backgroundColor:"lightgrey"}}>
  <button type="button" className="btn btn-light dark"style={{fontSize:"20x",color:"blue"}}>All</button>
  <button type="button" className="btn btn-light dark"style={{fontSize:"20px",color:"grey"}}>New</button>
  <button type="button" className="btn btn-light dark"style={{fontSize:"20px",color:"gray"}}>Completed</button>
  <button type="button" className="btn btn-light dark"style={{fontSize:"20px",color:"gray"}}>Over Due</button>
  
</div>
          <nav className="navbar navbar-light light">
  <div className="container-fluid">
    <form className="d-flex"style={{width:"790px",height:"70px",borderRadius:"5px solid",paddingTop:"15px"}}>
   
      <input className="form-control me-2" type="search" placeholder=" Search"style={{fontSize:"20px"}} />
     
    </form>
  </div>


                <div className='filt'>
                <i class="fa-solid fa-filter"></i>
                <h2 style={{paddingLeft:"20px"}}><IoFilterSharp style={{fontSize:"22px"}}/>FILTERS</h2>
            </div>
            </nav>

            <div className='page-btn'style={{paddingLeft:"100px"}}>
               
                <div className='page'style={{width:"35px",height:"35px"}}><p><MdOutlineKeyboardArrowLeft  style={{fontSize:"20px"}}/></p></div>
             <div className='page'style={{width:"35px",height:"35px"}}><p style={{fontSize:"20px"}}>1</p></div>
             <div className='page'style={{width:"35px",height:"35px"}}> <p style={{fontSize:"20px"}}>2</p></div>
             <div className='page'style={{width:"35px",height:"35px"}}><p style={{fontSize:"20px"}}>3</p></div>
             <div className='page'style={{width:"35px",height:"35px"}}><p style={{fontSize:"20px"}}>4</p></div>
             <div className='page'style={{width:"35px",height:"35px"}}><p style={{fontSize:"20px"}}>5</p></div>
             <div className='page'style={{width:"35px",height:"35px"}}><p style={{fontSize:"20px"}}><MdOutlineKeyboardArrowRight /></p></div>
            </div>

        

              
        
        <div className='assignment'>
          <div className='assignment-name'>
           <h2>[Resourse update] Topic -Xhr(xhrhttpsnhf)</h2>
          </div>
          <div className='coding'style={{color:"blue"}}>
                <h4> Video</h4>
          </div>
        </div>
        <div className='detail'>
         <div className='author'style={{    display: "flex"}}>
            <div className='short-form'>
               <h6>AB</h6>
            </div>
            <h3>Ankitha B</h3>
         </div>
         <div className='date'>
         <i class="fa-regular fa-calendar"></i>
         <p><CiCalendar style={{fontSize:"20px",fontWeight:"bold"}} />30 Mar, 2022 at 12:30 PM</p>
         </div>
         <div className='tag' >
         <i class="fa-solid fa-tag"></i>
         <p style={{paddingLeft: "7px"}}><CiLocationArrow1 style={{fontSize:"22px",fontWeight:"bold"}}/>Coding</p>
         </div>
         
        </div>
        <div className='horizontal-line'>
        </div>
        <div className='assignment'>
          <div className='assignment-name'>
           <h2>Scrum Call|Feb-Week 1|Placements</h2>
          </div>
          <div className='coding'>
                <h4 style={{backgroundColor:"daskblue"}}>Scrum</h4>
          </div>
        </div>
        <div className='detail'>
         <div className='author'style={{    display: "flex"}}>
            <div className='short-form'>
               <h6>VL</h6>
            </div>
            <h3>Vritti Lalwani</h3>
         </div>
         <div className='date'>
         <i class="fa-regular fa-calendar"></i>
         <p><CiCalendar style={{fontSize:"22px",fontWeight:"bold"}} />29 Mar, 2022 at 1:00 PM</p>
         </div>
         <div className='tag' >
         <i class="fa-solid fa-tag"></i>
         <p style={{paddingLeft: "7px"}}><CiLocationArrow1 style={{fontSize:"22px"}}/>General</p>
         </div>
         
        </div>
        <div className='horizontal-line'>

        </div>
        <div className='assignment'>
          <div className='assignment-name'>
           <h2>Orientation Call: Placement pathWay Program</h2>
          </div>
          <div className='coding'style={{color:"blue"}}>
                <h4 >Video</h4>
          </div>
        </div>
        <div className='detail'>
         <div className='author'style={{    display: "flex"}}>
            <div className='short-form'>
               <h6>S</h6>
            </div>
            <h3>Subham</h3>
         </div>
         <div className='date'>
         <i class="fa-regular fa-calendar"></i>
         <p><CiCalendar  style={{fontSize:"22px",fontWeight:"bold"}}/>28 Mar, 2022 at 9:30 PM</p>
         </div>
         <div className='tag' >
         <i class="fa-solid fa-tag"></i>
         <p style={{paddingLeft: "7px"}}><CiLocationArrow1 style={{fontSize:"22px"}} />General</p>
         </div>
         
        </div>
        <div className='horizontal-line'>

        </div>
       
        <div className='assignment'>
          <div className='assignment-name'>
           <h2>Session On Technical Communication in job interview</h2>
          </div>
          <div className='coding'style={{color:"blue"}}>
                <h4 >Video</h4>
          </div>
        </div>
        <div className='detail'>
         <div className='author'style={{    display: "flex"}}>
            <div className='short-form'>
               <h6>S</h6>
            </div>
            <h3>Subham</h3>
         </div>
         <div className='date'>
         <i class="fa-regular fa-calendar"></i>
         <p><CiCalendar  style={{fontSize:"22px",fontWeight:"bold"}} />28 Mar, 2022 at 7:30 PM</p>
         </div>
         <div className='tag' >
         <i class="fa-solid fa-tag"></i>
         <p style={{paddingLeft: "7px"}}><CiLocationArrow1 style={{fontSize:"22px"}}/>General</p>
         </div>
         
        </div>
        <div className='horizontal-line'>

        </div>
        </div>
 </div>
  )
}

export default Lecture

import React from 'react'
import "./discussions.css"
import { CiCalendar } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Discussions(props) {
  return (
    
    <div  style={{marginLeft:"26%"}}>
        
                 <div className='Head' style={{ display: 'flex'}}>
                <h1 style={{
                    fontSize: '29px',
                    paddingLeft: '17px',
                    paddingTop: ' 6px',
                    paddingBottom: '20px',
                    letterSpacing: '-2px',
                    fontFamily: "sans-serif",
                    fontWeight:"bold"
                }}> Discussion</h1>
      
        
                <div className='mydiscussion' style={{
                    width: '156px',
                    marginLeft: '780px',
                    height: '42px',
                    paddingTop: '6px',
                    marginTop:'10px',
                    borderRadius: '16px',
                   
                }}>

                    <h2 style={{
                        fontSize: '20px',
                        paddingLeft: '17px',
                        paddingTop: ' 8px',
                        paddingBottom: '20px',
                        letterSpacing: '0px',
                        fontFamily: 'sans-serif',
                        backgroundColor:"lightskyblue"
                       
                    }}>My Discussion</h2>
                </div>
            </div>
            <div className='nav-assignment'>
            <div className="btn-group" role="group" aria-label="Basic example"style={{width:"700px",height:"50px",borderRadius:"20px solid black",backgroundColor:"lightgrey"}}>
  <button type="button" className="btn btn-light dark"style={{fontSize:"20x",color:"blue"}}>All</button>
  <button type="button" className="btn btn-light dark"style={{fontSize:"20px",color:"grey"}}>Lecture</button>
  <button type="button" className="btn btn-light dark"style={{fontSize:"20px",color:"gray"}}>Assignments</button>
  <button type="button" className="btn btn-light dark"style={{fontSize:"20px",color:"gray"}}>Assignments Problems</button>
  
</div>
            </div>
            <nav className="navbar navbar-light light">
  <div className="container-fluid">
    <form className="d-flex"style={{width:"790px",height:"70px",borderRadius:"5px solid",paddingTop:"15px"}}>
   
      <input className="form-control me-2" type="search" placeholder=" Search"style={{fontSize:"20px",}} />
     
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
                    <h2>Substring Game</h2>
                </div>
                <div className='coding' style={{ display: 'flex' }}>
                    <h4 >Public</h4>
                    <div className='coding2'>
                        <h4> Closed</h4>
                    </div>
                </div>
            </div>

            <div className='detail'>
                <div className='conclude'>
                    <i class="fa-regular fa-comments"></i>
                    <h6 style={{ fontFamily: 'cursive' }}> 0 Response</h6>
                </div>
                <div className='tag' >
                    <i class="fa-solid fa-tag"></i>
                    <p style={{ paddingLeft: '7px', fontFamily: 'cursive' }}>Lecture</p>
                </div>
                <div className='author' style={{ display: "flex", paddingLeft: '538px' }}>
                    <div className='short-form' style={{ background: '#d78837' }}>
                        <h6 >KW</h6>
                    </div>
                    <h3>Kruthi kishor wadhai</h3>
                </div>
                <div className='date'>
                    <i class="fa-sharp fa-solid fa-circle" style={{ fontSize: '6px', paddingTop: '8px' }}></i>
                    <p>.26 Mar, 2022 at 12:30 PM</p>
                </div>


            </div>
            <div className='horizontal-line'>
            </div>
            <div className='assignment'>
                <div className='assignment-name'>
                    <h2>Promise</h2>
                </div>
                <div className='coding' style={{ display: 'flex' }}>
                    <h4>Public</h4>
                    <div className='coding2'>
                        <h4>Closed</h4>
                    </div>
                </div>
            </div>

            <div className='detail'>
                <div className='conclude'>
                    <i class="fa-regular fa-comments"></i>
                    <h6 style={{ fontFamily: 'cursive' }}> 1 Response</h6>
                </div>
                <div className='tag' >
                    <i class="fa-solid fa-tag"></i>
                    <p style={{ paddingLeft: '7px', fontFamily: 'cursive' }}>Assignment Problem</p>
                </div>
                <div className='author' style={{ display: "flex", paddingLeft: '449px' }}>
                    <div className='short-form' style={{ background: '#d78837' }}>
                        <h6 >KW</h6>
                    </div>
                    <h3>Kruthi kishor wadhai</h3>
                </div>
                <div className='date'>
                    <i class="fa-sharp fa-solid fa-circle" style={{ fontSize: '6px', paddingTop: '8px' }}></i>
                    <p>26 Mar, 2022 at 12:30 PM</p>
                </div>


            </div>
            <div className='horizontal-line'>
            </div>
       </div>
     
    
  )
}



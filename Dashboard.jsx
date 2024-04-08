import MyCourse from "./MyCourse";
import Assignment from "./Assignment";
import Dsa from "./Dsa";
import More from "./More";
import React from 'react'
import {  Grid } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import MenuList from "./MenuList";
import Discussions from "./Discussions";
import Quiz from "./Quiz";
import Lecture from "./Lecture";
import First from "./First";

function Dashboard() {
  return (
    <div>
      <Grid >
              <Grid item xs={12} >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrSyxqeGsYvz7r4Zm47Z4UEdwnzaYQGdy8y117t7I&s"alt="floobyte" style={{width:"300px",background:"white",textDecoration:"none"}}/>
             
              </Grid>
              <Grid item xs={1} >
              <MenuList/>
              </Grid>
              <Grid xs={11} style={{marginLeft:"-5%",marginTop:"-40%"}}>
                <Routes>
                  <Route element={<MyCourse />} path="/Mycourse" />
                  <Route element={<More />} path="/More" />
                  <Route element={<Assignment/>} path="/Assignment"/>
                  <Route element={<Dsa/>} path="/Dsa"/>
                  <Route element={<Discussions/>} path="/Discussions"/>
                  <Route element={<Quiz/>} path="/Quiz"/>
                  <Route element={<Lecture/>} path="/Lecture"/>
               
                  <Route element={<First/>} path="/First"/>
                  

                  



                </Routes>
              </Grid>
            </Grid>
    </div>
  )
}

export default Dashboard

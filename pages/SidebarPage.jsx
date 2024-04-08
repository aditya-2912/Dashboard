import React from 'react'
import Dashboard from '../Dashboard';
import Announcements from '../Announcements';
import MyCourse from '../MyCourse';
import Discussions from '../Discussions';
import More from '../More';
import SupportTicket from '../SupportTicket';
import MenuList from '../MenuList';
import Logo from '../Logo'
import Assignment from '../Assignment';
import DSA from "../Dsa";


function SidebarPage() {
  return (
    <div>
      
      <Logo/>
      <MenuList/>
      <Dashboard/>
      <Announcements/>
      <MyCourse/>
      <Assignment/>
      <DSA/>
      <Discussions/>
      <More/>
      <SupportTicket/>
    </div>
  );
};

export default SidebarPage

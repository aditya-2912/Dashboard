import React from "react";
import {Menu} from 'antd'
import {AppstoreOutlined,SoundOutlined,GithubOutlined ,EllipsisOutlined,UsergroupAddOutlined, } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
 


function MenuList() {  var navigate = useNavigate()
  return (
   <Menu style={{width:"290px",height:"600px",paddingTop:"20px",fontsize:"20px",fontFamily:"sans-serif"}} mode="inline" className='menu-bar'>
    <Menu.Item key="Dashboard"onClick={() => navigate('/dashboard/First')} icon={<AppstoreOutlined style={{fontSize:"25px"}}/>}>
        Dashboard
    </Menu.Item>
    <Menu.Item key="Announcements" icon={<SoundOutlined style={{fontSize:"25px",fontFamily:"sans-serif"}} />}>
    Announcements 
    </Menu.Item>
    <Menu.SubMenu key="My Course" icon={<AppstoreOutlined style={{fontSize:"25px",fontFamily:"sans-serif"}}/>}
       title="My Course" >
<Menu.SubMenu key="Lectures"onClick={() => navigate('/dashboard/Lecture')}title="Lectures">
<Menu.Item key="task1"style={{fontFamily:"sans-serif",color:"blue"}}>task1</Menu.Item>

</Menu.SubMenu>
<Menu.SubMenu key="Blended Learning"onClick={() => navigate('/dashboard/Blending')} title="Blended Learning">
<Menu.Item key="task3"style={{fontFamily:"sans-serif",color:"blue"}}>task3</Menu.Item>

</Menu.SubMenu>
<Menu.SubMenu key="Assigmnent" title="Assignments">
<Menu.Item key="task5" style={{fontFamily:"sans-serif",color:"blue"}}onClick={() => navigate('/dashboard/Assignment')} >task5</Menu.Item>

</Menu.SubMenu>
<Menu.SubMenu key="Quiz"onClick={() => navigate('/dashboard/Quiz')} title="Quiz">
<Menu.Item key="task7"style={{fontFamily:"sans-serif",color:"blue"}}>task7</Menu.Item>

</Menu.SubMenu>
<Menu.SubMenu key="Practice Tests"  title="Practice Tests">

<Menu.Item key="Dsa"style={{fontFamily:"sans-serif",color:"blue"}} onClick={() => navigate('/dashboard/MyCourse')}>DSA</Menu.Item>
</Menu.SubMenu>
    </Menu.SubMenu>

    <Menu.Item key="Discussions"style={{fontSize:"20px",fontFamily:"sans-serif"}} onClick={() => navigate('/dashboard/Discussions')}  icon={<UsergroupAddOutlined style={{fontSize:"25px"}}  />}>
        Discussions
    </Menu.Item>
    <Menu.Item key="More"style={{fontSize:"20px",fontFamily:"sans-serif"}} onClick={() => navigate('/dashboard/More')} icon={<EllipsisOutlined  style={{fontSize:"25px"}}/>}>
        More
    </Menu.Item>
    <Menu.Item key="Support Ticket"style={{fontSize:"20px",fontFamily:"sans-serif"}}  icon={<GithubOutlined style={{fontSize:"25px"}}/>}>
        Support Ticket
    </Menu.Item>

   </Menu>
  )
}

export default MenuList

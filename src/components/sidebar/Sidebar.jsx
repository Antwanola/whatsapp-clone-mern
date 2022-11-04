import React from 'react'
import  ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons'
import { Avatar, IconButton, } from '@material-ui/core'


import SidebarChat from './sidebarChat/SidebarChat';
import img from '../../assets/user-4.jpg'
import './sidebar.css'

export default function Sidebar() {
  return (
   <div className="sidebar">
    <div className="sidebar_header">
      <Avatar src={img} />
      <div className="sidebar_headerRight">

      <IconButton>
          <DonutLargeIcon/>
       </IconButton>

        <IconButton>
        <ChatIcon />
        </IconButton>
        
       <IconButton>
        <MoreVertIcon />
        </IconButton>

      </div>
    </div>

    <div className="sidebar_search">
      <div className="sidebar_searchContainer">
        <SearchOutlined/>
        <input type="text" placeholder='Search or start a new chat' />
      </div>
     
    </div>

    <div className="sidebar_chats">
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
    </div>
   </div>
  )
}

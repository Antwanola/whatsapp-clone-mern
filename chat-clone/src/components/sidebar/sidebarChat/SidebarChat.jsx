import { Avatar } from '@material-ui/core'
import './sidebarChat.css'
export default function sidebarChat() {
  return (
    <div className="sidebarChat">
        <Avatar/>
        <div className="sidebarChat__info">
          <h2>Room Name</h2>
          <p>The last message on the room</p>
        </div>
    </div>
  )
}

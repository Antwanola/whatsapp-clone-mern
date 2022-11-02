import { Avatar, IconButton } from "@material-ui/core"
import AttachFile from "@material-ui/icons/AttachFile"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './chat.css'

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar/>
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen for the .....</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlinedIcon/>
          </IconButton>

          <IconButton>
            <AttachFile/>
          </IconButton>

          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
      <p className="chat_message">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

      <p className="chat_message chat_receiver">
        <span className="chat_name">Antwanola</span>
        this is a message
        <span className="chat_timestamp">{ new Date().toUTCString()}</span>
      </p>

     
    </div>
    <div className="chat_footer">
        <InsertEmoticonIcon/>
        <form action="">
          <input type="text" placeholder="type a message" />
          <button type="submit">send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}

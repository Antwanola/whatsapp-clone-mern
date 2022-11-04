import { Avatar, IconButton } from "@material-ui/core";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import axios from "../../axios/axios";
import MicIcon from "@material-ui/icons/Mic";
import "./chat.css";
import { useState } from "react";


export default function Chat({ messages }) {
  const [ input, setInput ] = useState('');
  
  const sendMessage = async (e) =>{
    e.preventDefault();
    await axios.post('/api/v1/messages/new', {
      message: input,
      name: "ola",
      timeStamp: "just now",
      received:false
    })

    setInput('')
   }



  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen for the .....</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
      {messages.map(message => 
         <p className={`chat_message ${message.received && "chat_receiver"}`}>
         <span className="chat_name">{ message.name }</span>
         {message.message}
         <span className="chat_timestamp">{message.timeStamp}</span>
       </p>
    )}
       

        <p className="chat_message chat_receiver">
          <span className="chat_name">Antwanola</span>
          this is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form action="">
          <input value={input}
          onChange={(e)=>setInput(e.target.value)}
           type="text" 
           placeholder="type a message" />
          <button  onClick={sendMessage} type="submit">send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

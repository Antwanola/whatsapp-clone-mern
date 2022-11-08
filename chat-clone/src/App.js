import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Pusher from "pusher-js"
import axios from "./axios/axios"
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const  [ messages, setMessages] = useState([]);

  useEffect(()=>{
    axios.get('/api/v1/messages').then(( res)=>{
      setMessages(res.data)
    })
  },[])


  useEffect(()=>{
    const pusher = new Pusher('177872d32245dcb43401', {
      cluster: 'eu'
    });
    const channel = pusher.subscribe('chatChannel');
    channel.bind('pushChat', (data) => {
      // alert(JSON.stringify(data));
      setMessages([...messages, data])
    });
    return ()=>{
      channel.unsubscribe()
      channel.unbind()
    }

  },[messages])


  return (
    <div className="App">
      <Sidebar/>
      <Chat messages={messages}/>
    </div>
  );
}

export default App;

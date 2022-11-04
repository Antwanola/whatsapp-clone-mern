import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Pusher from 'pusher-js'
import axios from "./axios/axios"
import { useEffect, useState } from "react"
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    try {
      axios.get("/api/v1/messages").then((res) => {
        setMessages(res.data);
      });
    } catch (error) {
      console.log(error.res.data)
    }
  }, []);

  // console.log(messages)


  useEffect(() => {
    const pusher = new Pusher("177872d32245dcb43401", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("chatChannel");
    channel.bind("pushChat",  (data) => {
      // alert(JSON.stringify(data));
      setMessages([...messages, data])
    });

    return ()=>{
      channel.unsubscribe()
      channel.unbind_all()     
    }
  }, [messages]);



  return (
    <div className="App">
      <Sidebar/>
      <Chat messages={messages} />
    </div>
  );
}

export default App;

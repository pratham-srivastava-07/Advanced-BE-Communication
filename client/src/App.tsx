import  { useState, useEffect } from "react";

import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)

  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log("connected");
      socket.send("hello")

      socket.onmessage = (message) => {
        console.log(message.data)
      }
      setSocket(socket)
      return () => socket.close()
    }
  },[])

  if(!socket) {
    return "connecting to server"
  }
  return (
    <>
    <input type="text" />
    <button onClick={()=> (socket.send("Hello")) }>Send</button>
    </>
  )
}

export default App

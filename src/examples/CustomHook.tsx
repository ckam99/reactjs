import {  useEffect, useState } from "react"
import { Counter } from "../model"
import { useWebSocket } from "../hooks/websocket"


export default function CustomHookExample() {
  const [counter, setCounter] = useState<Counter>()
  const [subscribed, setSubscribed] = useState(false)

  const ws = useWebSocket<Counter>({

    url: "ws://localhost:3000/ws/123?v=1.0",
    onSocketOpen: (e) => {
        if(!subscribed){
         ws.send("TRAVELS-GET")
         setSubscribed(true)
        }
    },
    onReceiveMessage: (data) => {
       console.log("received:", data);
       setCounter(data)
    },
    onSocketError: (e) =>  {
      ws.close()
    }
  })

  function SendWsData(s : string) {
    if(ws.OPEN == 1) {
       ws.send(s)
    }
  }



 // console.log("render");

  return (
    <div className="App">
      <button onClick={(e) => SendWsData("TRAVELS-GET")}>Souscribe</button>
      {JSON.stringify(counter)}

      <div className="flex">
        timer: <span>{counter?.time}</span>
      </div>
    </div>
  )
}

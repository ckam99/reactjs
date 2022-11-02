import {  useEffect, useState } from "react"
import { Counter } from "../model"
import { useWebSocket } from "../hooks/websocket"

type User = {
  name: string
  age: number
}

type Data = {
  target: "user" | "timer"
  data: any
}

export default function CustomHookExample() {
  const [counter, setCounter] = useState<Counter>()
  const [subscribed, setSubscribed] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const ws = useWebSocket<Data>({

    url: "ws://localhost:9000/ws/124?v=1.0",
    onSocketOpen: (e) => {
        if(!subscribed){
         ws.send("GET-TIMER")
         setSubscribed(true)
        }
    },
    onReceiveMessage: (s) => {
       console.log("received:", s);
       if(s.target == 'timer'){
         setCounter(s.data as Counter)
       }
       if(s.target == 'user'){
        setUsers([...users, s.data as User])
       }
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
      <h1>List users</h1>
      <button onClick={(e) => SendWsData("GET-USER")}>Souscribe for users</button>
      <div>
        {users.map((user, i) => <div key={i}>
          {user.name} - {user.age}
        </div>)}
      </div>
      {JSON.stringify(users)}
     
     

      <div className="flex">
       <div> timer: <span>{counter?.time}</span></div>
       <div style={{marginLeft:"10px"}}> counter: <span>{counter?.counter}</span></div>
      </div>
      {JSON.stringify(counter)}
    </div>
  )
}

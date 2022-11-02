import { useEffect, useState } from 'react'
import { Counter } from '../model';



export default function BasicExample() {
  const [counter, setCounter] = useState<Counter>({
    time: "00:00:00",
    counter: 0
  })

  const [message, setMessage] = useState<string>()

  useEffect(() => {
    console.log("message changed: ", message);
    const c = JSON.parse(message || '{}') as Counter
   setTimeout(() => {
    setCounter(c)
   }, 0);
  }, [message])

  useEffect(()=>{
    //websocket onopen event listener
   let wss = new WebSocket("ws://localhost:9000/ws/123?v=1.0")
   wss.onopen = () => {
     console.log("connected websocket main component");
     wss.send("TRAVELS-GET")
   }
     // websocket onclose event listener
   wss.onclose = e => {
       console.log(
           `Socket is closed. Reconnect will be attempted in ${Math.min(
               10000 / 1000,
                1000
           )} second.`,
           e.reason
       );
   };
   wss.onmessage = (e: MessageEvent<Counter>) => {
    setMessage(JSON.stringify(e.data))
    sleep(1000)
   }

   function sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
   
  // websocket onerror event listener
  wss.onerror = (err) => {
     console.error("Socket encountered error: ", err,"Closing socket");
     wss.close();
  };

 //connect("ws://localhost:3000/ws/123?v=1.0")
  
 }, [])


  return (
    <div className="App">
      <h1>Time: {counter.time}</h1>
      <h1>Counter: {counter.counter}</h1>
      <h1>Data: {message}</h1>

    </div>
  )
}

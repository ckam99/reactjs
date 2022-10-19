import { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { Counter } from '../model';

export const ExternalLibExample = () => {

  const { sendMessage, lastMessage, readyState } = useWebSocket('ws://localhost:3000/ws/123?v=1.0');
  const [counter, setCounter] = useState<Counter>()
  

  useEffect(() => {
    if (lastMessage !== null) {
      const data = JSON.parse(lastMessage.data) as Counter
      console.log(data);
      setCounter(data)
    }
  }, [lastMessage]);


  const handleClickSendMessage = useCallback(() => sendMessage('TRAVELS-GET'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Start stream
      </button>
      <div>The WebSocket is currently {connectionStatus}</div>
      <div className='flex'> 
         <span className='bold'>counter: </span>
         <h1 >{counter?.time || "00.00.00"}</h1>
      </div>
      <div className='flex'> 
         <span className='bold'>time: </span>
         <h1 >{counter?.counter || 0}</h1>
      </div>
    
    </div>
  );
};
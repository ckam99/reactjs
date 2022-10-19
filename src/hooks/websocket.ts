

type WebSocketEvent = ( e: Event, ws?: WebSocket) => void

type WebSocketProp<T> = {
    url:string, 
    onSocketOpen?: WebSocketEvent
    onSocketError?: WebSocketEvent
    onSocketClose?: WebSocketEvent
    onReceiveMessage: (data: T) => void
}

// type WebSocketState = "OPEN" | "CLOSED" | "CONNECTING" | "CLOSING"

export function useWebSocket<T>(prop: WebSocketProp<T>): WebSocket{
    
    let ws = new WebSocket(prop.url)
   
    ws.onopen = (e) => {

       if(prop.onSocketOpen)
         prop.onSocketOpen(e, ws)
    }

    ws.onerror = (e) =>  {
     //   ws.close()
        if(prop.onSocketError)
         prop.onSocketError(e, ws)
    }

    ws.onmessage =  (e) => {
        prop.onReceiveMessage(JSON.parse(e.data) as T)
    }

    ws.onclose = e => {
        console.log(
            `Socket is closed. Reconnect will be attempted in ${Math.min(
                10000 / 1000,
                 1000
            )} second.`,
            e.reason
        );

        if(prop.onSocketClose)
          prop.onSocketClose(e)
    };
    

    return ws
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment, Reset } from '../store/actions/counter';


const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    return <div>
        <h1>Locale: {count}</h1>
        <button onClick={() => dispatch(Decrement())}>Decrement</button>
        <button onClick={() => dispatch(Increment())}>increment</button>
        <button onClick={() => dispatch(Reset())}>reset</button>
    </div>
}


export default Counter
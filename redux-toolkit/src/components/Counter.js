import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/reducers/counters';


function Counter() {

    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count)

    return <div>
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    </div>
}

export default Counter;
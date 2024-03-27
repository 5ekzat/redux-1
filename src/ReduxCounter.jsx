
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ReduxCounter = () => {
    const counter = useSelector((state)=>state.counter);
    const dispatch = useDispatch();

    const plusCounter = () => {
        dispatch({ type: "plus" });
    }
    const minusCounter = () => {
        dispatch({ type: "minus" });
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={plusCounter}>+</button>
            <button onClick={minusCounter}>-</button>
        </div>
    );
}

export default ReduxCounter;

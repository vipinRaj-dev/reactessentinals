import React from "react";
import {
  decrementCount,
  incrementcount,
} from "../Features/counter/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

 
const CounterRedex = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.count)

  return ( 
    <div>
      <h1>Counter</h1>
      <h3>count : {count}</h3>
      <button onClick={()=>dispatch(incrementcount(5))}>Increment</button>
      <button onClick={()=>dispatch(decrementCount())}>Decrement</button>
    </div>
  );
};

export default CounterRedex;

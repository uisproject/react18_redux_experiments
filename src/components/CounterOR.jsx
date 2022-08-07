import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../oldRedux/actions/Counter";

const CounterOR = () => {
  const dispatch = useDispatch();
  const getCounter = useSelector((state) => state.counter);

  return (
    <div>
      Counter: {getCounter.count}
      <br />
      <button onClick={() => dispatch(increment({ count: 1 }))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement({ count: 1 }))}>
        Decrement
      </button>
    </div>
  );
};

export default CounterOR;

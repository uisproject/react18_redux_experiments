import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { counting } from "../features/counter";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      Current Counter : {count}
      <br />
      <button
        onClick={() => {
          dispatch(counting(1));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(counting(-1));
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

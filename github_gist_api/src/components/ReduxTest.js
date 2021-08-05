import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/index";
import React, { useEffect, useState } from "react";

function ReduxTest() {
  const counter = useSelector((state) => state.counter);
  const [isOdd, setIsOdd] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (counter % 2 === 0) {
      setIsOdd(false);
    } else {
      setIsOdd(true);
    }
  }, [counter]);

  return (
    <div>
      <p>Counter {counter}</p>
      <button onClick={() => dispatch(increment(5))}> + </button>
      <button onClick={() => dispatch(decrement(5))}> - </button>
      {isOdd ? <p>Number is odd</p> : <p>Number is not odd</p>}
    </div>
  );
}

export default ReduxTest;

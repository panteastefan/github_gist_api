import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/index";

function ReduxTest() {
  const counter = useSelector((state) => state.counter);
  const isOdd = useSelector((state) => state.isOdd);
  const dispatch = useDispatch();

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

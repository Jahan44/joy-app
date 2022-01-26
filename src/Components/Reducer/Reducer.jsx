import React from "react";
import { useReducer } from "react";
import { useState } from "react";

const initialState = {
  value: 0,
};
const reduc = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "increment":
      return { value: state.value + action.value };
    case "decrement":
      return { value: state.value - action.value };
    default:
      return state;
  }
};
const Reducer = () => {
  const [count, SetCount] = useState(0);
  //   useReducer use
  const [count2, dispatch] = useReducer(reduc, initialState);

  return (
    <div>
      <h1>Count:{count}</h1>
      <br />
      <button
        onClick={() => {
          SetCount(count + 1);
        }}
      >
        Incriment
      </button>
      <button
        onClick={() => {
          SetCount(count - 1);
        }}
      >
        decriment
      </button>

      <br />
      <br />
      <h1>Count:{count2.value}</h1>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 3 });
        }}
      >
        Incriment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        decriment
      </button>
    </div>
  );
};

export default Reducer;

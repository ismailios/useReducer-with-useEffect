import React, { useReducer, useEffect } from "react";
import "./App.css";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SHOW_MESSAGE = "SHOW_MESSAGE";
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case SHOW_MESSAGE:
      return {
        ...state,
        message: "this is " + state.counter
      };
    default:
      return state;
  }
};

const App = () => {
  const initialState = {
    counter: 0,
    message: "Hello Devs !! this is a simple exemple of UseReducer Hooks"
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.counter >= 10) {
      dispatch({ type: SHOW_MESSAGE });
    }
  }, [dispatch, state.counter]);

  return (
    <div>
      <div className="wrapper">
        <div> {state.message}</div>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: INCREMENT, payload: 10 });
          }}
        >
          INCREMENT
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: DECREMENT, payload: 10 });
          }}
        >
          DECREMENT
        </button>
        <div> {state.counter}</div>
      </div>
    </div>
  );
};

export default App;

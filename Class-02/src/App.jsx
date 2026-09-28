import { useState } from "react";
import "./App.css"

export default function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="counter">
        <h1>Counter App</h1>

        <div className="count">{count}</div>

        <div className="buttons">
          <button className="decrease" onClick={decrease}>
            Decrease
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>

          <button className="increase" onClick={increase}>
            Increase
          </button>
        </div>
      </div>
    </div>
  )
}
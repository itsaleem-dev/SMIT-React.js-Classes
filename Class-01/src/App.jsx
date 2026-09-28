import { useState } from "react";
import "./style.css"

export default function App() {
  const [advice, setAdvice] = useState("Click And Get Advice");
  const [count, setCount] = useState(0);

  async function infoDataAPI() {
    const res = await fetch("https://api.adviceslip.com/advice");

    const resJson = await res.json();
    console.log(resJson);

    setAdvice(resJson.slip.advice);
    setCount(count + 1)
  }

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Class 01 React Code</h1>
      <p>Our Adive Number is {count}</p>
      {/* <State count={count} /> */}
      <h3>{advice}</h3>
      <button onClick={infoDataAPI}>Advice</button>
    </div>
  );
}

// function State({ count }) {
//   return (
//     <h2>Our Advice Number is {count}</h2>
//   )
// }
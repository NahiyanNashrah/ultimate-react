import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const incrementStep = () => setStep((step) => step + 1);
  const deccrementStep = () => setStep((step) => step - 1);
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount((count) => count + step);
  const deccrementCount = () => setCount((count) => count - step);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div className="flex">
        <button onClick={deccrementStep}>-</button>
        <div>Step: {step}</div>
        <button onClick={incrementStep}>+</button>
      </div>
      <div className="flex">
        <button onClick={deccrementCount}>-</button>
        <div>Count: {count}</div>
        <button onClick={incrementCount}>+</button>
      </div>
      <div>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} day(s) from Today is: `
          : `${Math.abs(count)} day(s) ago from Today is: `}
        {date.toDateString()}
      </div>
    </div>
  );
}

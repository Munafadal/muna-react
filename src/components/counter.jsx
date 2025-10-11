import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Declare a state variable

  return (
    <div style={{backgroundColor: "yellow"}}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;

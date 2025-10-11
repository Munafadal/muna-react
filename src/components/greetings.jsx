import { Fragment } from "react";

// Greeting.jsx
function Greeting(props) {
  return (
    <div style={{backgroundColor: "black", color: "white"}}>
      <h1>
        Hello, {props.name} {props.surname} 👋
      </h1>
      ;<h2>This text was not there</h2>
    </div>
  );
}

export default Greeting;

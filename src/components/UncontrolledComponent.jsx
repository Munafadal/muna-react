import { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef(); // create a reference

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered Name ${inputRef.current.value}`);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef} />
      <button onClick={handleSubmit}>Show Name</button>
    </div>
  );
}

export default UncontrolledComponent;

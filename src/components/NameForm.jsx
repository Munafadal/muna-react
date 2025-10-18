import { useState } from "react";

function NameForm() {
    const [name, setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value)
    }

  return (
    <div>
      <h2>Hello, {name || "Stranger" }!</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
              onChange={handleChange}
              placeHolder="Enter your name"
      />
    </div>
  );
}

export default NameForm;

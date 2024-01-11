import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNote } from "../reducers/anecdoteReducer";

const AnecodeForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote(input));
    setInput("");
  };

  return (
    <div>
      {" "}
      <h2>create new</h2>
      <form onSubmit={formSubmit}>
        <div>
          <input
            type="text"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecodeForm;

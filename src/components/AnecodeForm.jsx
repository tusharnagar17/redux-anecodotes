import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNote } from "../reducers/anecdoteReducer";
import { addMessage } from "../reducers/notifyReducer";
import noteService from "../services/noteService";

const AnecodeForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    // dispatch(addMessage(`new note has been created : ${input}`));
    const data = {
      content: input,
      votes: 0,
    };
    const postData = await noteService.createReq(data);
    dispatch(createNote(postData));
    dispatch(addMessage(`New Note has been added: ${input}`));
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

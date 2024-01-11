import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseVote } from "../reducers/anecdoteReducer";
import { addMessage } from "../reducers/notifyReducer";

const AnecodeList = () => {
  const anecdotes = useSelector((state) => state.notes);
  const param = useSelector((state) => state.filters.params);

  console.log("notesReducer value", anecdotes);
  console.log("parameter used: ", param);

  const notes = anecdotes.filter((n) =>
    n.content.toLowerCase().includes(param)
  );

  // sorting as per like
  const sortedData = notes.sort((a, z) => z.votes - a.votes);
  const dispatch = useDispatch();

  const handleVote = (term) => {
    dispatch(increaseVote(term.id));
    dispatch(addMessage(`You have voted for: ${term.content}`));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedData.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div style={{ padding: 3 }}>
            has {anecdote.votes}
            <button
              style={{ marginLeft: 5 }}
              onClick={() => handleVote(anecdote)}
            >
              {" "}
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecodeList;

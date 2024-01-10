import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseVote } from "../reducers/anecdoteReducer";

const AnecodeList = () => {
  const anecdotes = useSelector((state) => state.notes);
  const param = useSelector((state) => state.filters.params);

  const notes = anecdotes.filter((n) =>
    n.content.toLowerCase().includes(param)
  );

  // sorting as per like
  const sortedData = notes.sort((a, z) => z.votes - a.votes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedData.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(increaseVote(anecdote.id))}>
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

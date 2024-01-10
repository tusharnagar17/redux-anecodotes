import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseVote } from "../reducers/anecdoteReducer";

const AnecodeList = () => {
  const anecdotes = useSelector((state) => state);

  // sorting as per like
  const sortedData = anecdotes.sort((a, z) => z.votes - a.votes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
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

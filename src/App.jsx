import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { newNote, increaseVote } from "./reducers/anecdoteReducer";
import AnecodeList from "./components/AnecodeList";
import AnecodeForm from "./components/AnecodeForm";

const App = () => {
  return (
    <div>
      <AnecodeList />
      <AnecodeForm />
    </div>
  );
};

export default App;

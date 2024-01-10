import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { newNote, increaseVote } from "./reducers/anecdoteReducer";
import AnecodeList from "./components/AnecodeList";
import AnecodeForm from "./components/AnecodeForm";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <Filter />
      <AnecodeList />
      <AnecodeForm />
    </div>
  );
};

export default App;

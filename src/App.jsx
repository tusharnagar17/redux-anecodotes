import AnecodeList from "./components/AnecodeList";
import AnecodeForm from "./components/AnecodeForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import React from "react";
import noteService from "./services/noteService";
import { setNote } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    noteService.getAll().then((notes) => dispatch(setNote(notes)));
  }, []);
  return (
    <div>
      <Notification />
      <Filter />
      <AnecodeList />
      <AnecodeForm />
    </div>
  );
};

export default App;

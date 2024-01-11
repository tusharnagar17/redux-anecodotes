import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import noteService from "../services/noteService";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);
// const dispatch = useDispatch();

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      // console.log(action.payload);
      // const newNote = {
      //   content: action.payload,
      //   id: getId(),
      //   votes: 0,
      // };
      // console.log("new note", newNote);
      return [...state, action.payload];
    },
    increaseVote(state, action) {
      // console.log(action.payload);
      const id = action.payload;
      const NeedChange = state.find((n) => n.id === id);
      const newOne = {
        ...NeedChange,
        votes: NeedChange.votes + 1,
      };

      return state.map((note) => (note.id !== id ? note : newOne));
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNote(state, action) {
      return action.payload;
    },
  },
});

export const { createNote, increaseVote, appendNote, setNote } =
  noteSlice.actions;

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch(setNote(notes));
  };
};
export const postNotes = (data) => {
  return async (dispatch) => {
    const notes = await noteService.createReq(data);
    dispatch(createNote(notes));
  };
};

export default noteSlice.reducer;

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import axios from 'axios';


function App(props) {

  const [notesState, setNotesState] = useState([]);

  useEffect(() => {
    axios.get(" https://reqres.in/api/users")
      .then(response => {
        setNotesState(response.data.data);
      });
  }, []);

  useEffect(() => {

  }, [notesState]);

  const addNoteHandler = newNote => {
    setNotesState([...notesState, newNote]);
  };

  return (
    <div className="App">
      <h1>My Team</h1>
      <NoteForm addNote={addNoteHandler} />
      <Notes notes={notesState} />
    </div>
  );
}

export default App;

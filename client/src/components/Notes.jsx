import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios"

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
     getList();
   });

  function getList() {
    axios.get("http://localhost:4000/note")
    .then((res) => {
      setNotes(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  function deleteNote(id) {
    axios.delete(`http://localhost:4000/note/${id}`)
  };

  return (
    <div>
      <Header />
      <CreateArea/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Notes;

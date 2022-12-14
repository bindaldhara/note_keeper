import React from "react";
import Note from "../Notes/Notes";
import "./Notes_container.css";

function NoteContainer(props) {
  const reverseArray = (arr) => {
    const array = [];
    for (let i =arr.length-1;i>=0;i--) {
      array.push(arr[i]);
    }
    return array;
  };
  const notes = reverseArray(props.notes);

  return (
    <div className="note-container">
      <h1>Note Keeper</h1>
      <div className="note-container_notes custom-scroll">
        {notes.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              delNote={props.delNote}
              updateText={props.updateText}
            />
          ))
        ) : (<h3>No Notes present currently..</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
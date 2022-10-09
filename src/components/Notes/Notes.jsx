import React from "react";
import deleteIcon from "../../assets/delete.png";
import "./Notes.css";


function Note(props) {
  const updateText = (Title,id,tagline,body) =>() => props.updateText(Title,id,tagline,body);
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_title"
      placeholder="Title" 
      defaultValue={props.note.title}
      onChange={(event)=>updateText(event.target.value,props.note.id)} 
      />
      <textarea className="note_tagline"
      placeholder="Tagline"
      defaultValue={props.note.tagline}
      onChange={(event)=>updateText(event.target.value,props.note.id)} 
      />
      <textarea
        className="note_body"
        placeholder="Body" 
        defaultValue={props.note.body}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.delNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
import React, { useState } from "react";

import NoteContainer from "./components/Notes_container/Notes_container";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [notes,setNotes]=useState([
    {
      id:1,
      title:'Lawyer',
      tagline:'Note 6',
      body:"Body:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id:2,
      title:'Doctor',
      tagline:'Note 5',
      body:"Body:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
      id:2,
      title:'Student',
      tagline:'Note 4',
      body:"Body:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
      id:3,
      title:'Bindal',
      tagline:'Note 3',
      body:"Body:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
      id:4,
      title:'Traveller',
      tagline:'Note 2',
      body:"Body:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
      id:5,
      title:'Teacher',
      tagline:'Note 1',
      body:"Body:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    }
    
  ]);
 
  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      title: "",
      tagline:'',
      body:" ",
      color,
    });
    setNotes(tempNotes);
  };

  const delNote = (id) => {
    const tempNotes = [...notes];
    const ind= notes.findIndex((item)=>item.id===id);
    if(ind<0)
      return;
    tempNotes.splice(ind,1);
    setNotes(tempNotes);
  };

  const updateText = (title,id,tagline,body) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].title = title;
    tempNotes[index].tagline = tagline;
    tempNotes[index].body = body;
  };

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        delNote={delNote}
        updateText={updateText}
      />
    </div>
  );
}


export default App;
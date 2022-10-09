import React, { useState } from "react";
import plusicon from "../../assets/plus.png";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#FFD580", "#FFC8B4", "#ADD8E6", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusicon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
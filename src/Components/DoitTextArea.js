import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addText } from "../Store";

const DoitTextArea = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addText(text));
      setText(""); 
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div >
      <div className="todo">TODO</div>
      <div className="AddText">
      <textarea className="textadd"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add A Task"
        rows={3}
      />
      <br />
   <div className="AddText-icons">
   <button className="Add-text" onClick={handleAdd}>ADD TASK</button></div></div></div>
  
  );
};

export default DoitTextArea;

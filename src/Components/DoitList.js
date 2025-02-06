
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeText, updateText } from "../Store"; 

const DoitList  = () => {
  const texts = useSelector((state) => state.texts);
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleCheckboxChange = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
    setEditText(texts[index]); // Set initial edit text
  };

  const handleDelete = () => {
    if (selectedIndex !== null) {
      dispatch(removeText(selectedIndex));
      setSelectedIndex(null);
    }
  };

  const handleEdit = () => {
    if (selectedIndex !== null && editText.trim()) {
      dispatch(updateText({ index: selectedIndex, newText: editText }));
      setSelectedIndex(null);
    }
  };

  return (
    <div>
       {selectedIndex !== null && (
        <div>
          <button className="Add-text do-margin" onClick={handleDelete}>Delete</button>
          <button className="Add-text do-margin" onClick={handleEdit}>Edit</button>
        </div>
      )}
      <ul>
        {texts.map((text, index) => (
          <li key={index}>
            <input className="todo-checkbox"
              type="checkbox"
              onChange={() => handleCheckboxChange(index)}
              checked={selectedIndex === index}
            />
            {selectedIndex === index ? (
              <input
              className="todo-input"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              text
            )}
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default DoitList ;

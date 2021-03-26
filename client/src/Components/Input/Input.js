import React from "react";
import "./Input.css";

const Input = ({ onInputChange, onSubmit, value }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        onChange={(event) => onInputChange(event.target.value)}
        value={value}
        onKeyPress={(event) => {
          // console.log(event.key);
          return event.key === "Enter" ? onSubmit(event) : null;
        }}
      />
      <button className="sendButton" type="submit">
        Send
      </button>
    </form>
  );
};

export default Input;

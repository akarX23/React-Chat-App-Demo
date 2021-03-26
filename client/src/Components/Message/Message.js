import React from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";

const Message = ({ message: { user, text }, name, showName }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim();
  console.log(showName);
  if (user === trimmedName) isSentByCurrentUser = true;

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      {showName === true ? <p className="sentText pr-10">{user}</p> : null}
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      {showName === true ? <p className="sentText pl-10">{user}</p> : null}
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};

export default Message;

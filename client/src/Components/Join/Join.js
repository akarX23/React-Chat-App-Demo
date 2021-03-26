import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./join.css";

const Join = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join-container">
      <input
        className="join-info"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />
      <input
        className="join-info"
        value={room}
        onChange={(event) => setRoom(event.target.value)}
        placeholder="Room"
      />
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button type="submit">Sign In</button>
      </Link>
    </div>
  );
};

export default Join;

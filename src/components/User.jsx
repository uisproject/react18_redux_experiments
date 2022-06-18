import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName } from "../features/actions/listActions";

const User = () => {
  const [name, setName] = useState("");
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };

  return (
    <div>
      <br />
      {users.map((user, idx) => (
        <div key={idx}>{user}</div>
      ))}
      -------------------- <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addName(name));
          setName("");
        }}
      >
        <input
          value={name}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
      </form>
    </div>
  );
};

export default User;

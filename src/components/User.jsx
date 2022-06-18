import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName } from "../features/actions/listActions";
import { fetchComments } from "../features/reducers/userReducers";

const User = () => {
  const [name, setName] = useState("");
  const { users, comments } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

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
      {comments.slice(0, 10).map((comment, idx) => (
        <div key={idx}>{comment.email}</div>
      ))}
    </div>
  );
};

export default User;

import React, { useEffect } from "react";
import { useGetUsersQuery, useAddUsersMutation } from "./features/api/userApi";

import Counter from "./components/Counter";
import Post from "./components/Post";
import User from "./components/User";

const App = () => {
  const result = useGetUsersQuery();
  console.log("Result of RTK Query : ", result);

  const body = { name: "Louis", username: "haha" };

  const [addUsers] = useAddUsersMutation();
  useEffect(() => {
    addUsers(body);
  }, []);

  return (
    <div>
      <Counter />
      <Post />
      <User />
    </div>
  );
};

export default App;

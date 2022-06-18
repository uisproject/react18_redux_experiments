import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../features/getPost";

const Post = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getPost);
  console.log("test");
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div>
      {data.slice(0, 10).map((item, idx) => (
        <div key={idx}>{item.title}</div>
      ))}
    </div>
  );
};

export default Post;

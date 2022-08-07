import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../oldRedux/actions/Post";

const PostOR = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <div>
      {posts?.posts.map((post) => (
        <div>
          <div>{post.body}</div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default PostOR;

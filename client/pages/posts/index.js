import axios from "axios";
// import React from "react";
import AllPosts from "../../components/AllPosts";

function Posts({ posts }) {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
}

export default Posts;

export async function getStaticProps() {
  const postsRes = await axios.get("http://127.0.0.1:1337/api/posts");
  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}

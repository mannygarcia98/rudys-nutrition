import axios from "axios";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";

function Home({ posts }) {
  return (
    <>
      <HomeHeader />
      <HomeLatestPosts posts={posts} />
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const postsRes = await axios.get("http://127.0.0.1:1337/api/posts");

  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}

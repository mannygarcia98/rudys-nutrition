import axios from "axios";
import React from "react";

// function Home(props) {
//   return (
//     <>
//       {/* <h1>{props.users[0].id}</h1> */}
//       <h1>{props.posts.data[0].attributes.createdAt}</h1>
//     </>
//   );
// }

// export default Home;

// export async function getServerSideProps() {
//   // const usersRes = await axios.get("http://127.0.0.1:1337/api/users");
//   const postsRes = await axios.get("http://127.0.0.1:1337/api/posts");

//   return {
//     props: {
//       // users: usersRes.data,
//       posts: postsRes.data,
//     },
//   };
// }

function Home({ posts }) {
  return (
    <>
      <h1>{posts[0].attributes.title}</h1>
      <h1>{posts[1].attributes.title}</h1>
    </>
  );
}

export default Home;

export async function getStaticProps() {
  // const usersRes = await axios.get("http://127.0.0.1:1337/api/users");
  const postsRes = await axios.get("http://127.0.0.1:1337/api/posts");

  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}

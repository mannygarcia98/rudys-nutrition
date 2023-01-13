import React from "react";
import axios from "axios";

// http://127.0.0.1:1337/api/posts
// Devistry tutorial
function PostPage({ post }) {
  return (
    <article>
      <h1>{post.data.id}</h1>
      <h1>{post.data.attributes.content}</h1>

      <h1>hello</h1>
    </article>
  );
}

export default PostPage;

// export async function getStaticProps(params) {
//   const postRes = await axios.get(`http://127.0.0.1:1337/api/posts/`);
//   console.log(postRes);

//   return {
//     props: {
//       post: postRes.data,
//     },
//   };
// }

// Devistry tutorial
// export async function getStaticPaths() {
//   const postsRes = await axios.get("http://127.0.0.1:1337/api/posts");
//   // const paths = postsRes.data.map((post) => {
//   //   return { params: { id: post.id.toString() } };
//   // });

//   const paths = postsRes.data.data.map((post) => {
//     return { params: { id: post.id.toString() } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:1337/api/posts");
  const data = await res.json();
  // console.log(data);
  const paths = data.data.map((post) => {
    // console.log(post.id.toString());
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  // const res = fetch("http://127.0.0.1:1337/api/posts/" + id);
  const res = await fetch("http://127.0.0.1:1337/api/posts/" + id);
  const data = await res.json();
  return {
    props: { post: data },
  };
};

// const testingFetch = () => {
//   fetch("http://127.0.0.1:1337/api/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       const paths = data.data.map((post) => {
//         console.log(post.id.toString());
//         return { params: { id: post.id.toString() } };
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// testingFetch();
// const PostPage = () => {
//   return (
//     <div>
//       <h1>Details Page</h1>
//     </div>
//   );
// };

// export default PostPage;

import React from "react";
import MarkdownIt from "markdown-it";

function PostPage({ post: { data } }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(data.attributes.content);

  return (
    <article>
      <header>
        <h1>{data.attributes.title}</h1>
        <h1>{data.attributes.description}</h1>
      </header>
      <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
    </article>
  );
}

export default PostPage;

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:1337/api/posts");
  const data = await res.json();
  const paths = data.data.map((post) => {
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
  // const id = params.id;
  // const res = await fetch("http://127.0.0.1:1337/api/posts/" + id);
  const res = await fetch(`http://127.0.0.1:1337/api/posts/${params.id}`);
  const data = await res.json();
  return {
    props: { post: data },
  };
};

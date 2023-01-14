import React from "react";
import Link from "next/link";
function PostPreview({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <h3>{post.attributes.title}</h3>
      <p>{post.attributes.description}</p>
      <p>{post.id}</p>
    </Link>
  );
}

export default PostPreview;

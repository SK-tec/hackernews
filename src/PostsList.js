import React from "react";

function PostsList({ news }) {
  return (
    <div>
      {news.map((post) => (
        <div key={post.objectID}>
          <div>
            {post.points} point{post.points === 1 && "s"}
          </div>
          <h1>{post.title}</h1>
          <a href={post.url} target="_blank">
            {post.url}
          </a>
          <div>{post.author}</div>
          <div>{post.created_at}</div>
          <div>
            {post.num_comments} comment{post.num_comments === 1 && "s"}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsList;

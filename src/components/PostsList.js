import React from "react";

function PostsList({ posts }) {
  //console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div>
            {post.points} point{post.points > 1 && "s"}
          </div>
          <h1>{post.title}</h1>
          <a href={post.url}>{post.url}</a>
          <div>{post.author}</div>
          <div>{post.created_at}</div>
          <div>
            {post.children.length} comment{post.children.length > 1 && "s"}
          </div>
          <div>last comment: </div>
          <div>from: {post.children[0].author}</div>
          <div>{post.children[0].created_at}</div>
        </div>
      ))}
    </div>
  );
}

export default PostsList;

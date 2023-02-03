import React from "react";
import Card from "react-bootstrap/Card";

function PostsList({ news }) {
  return (
    <div className="container">
      {news.map((post) => (
        <Card key={post.objectID} className="my-3 post" border="info">
          <Card.Header className="d-flex justify-content-between">
            <div>
              {post.points} point{post.points !== 1 && "s"}
            </div>
            <div> Author : {post.author}</div>
            <div>
              {post.num_comments} comment{post.num_comments !== 1 && "s"}
            </div>
            <div>{new Date(post.created_at).toLocaleString()}</div>
          </Card.Header>
          <Card.Body className="text-start text-primary">
            <Card.Title>{post.title}</Card.Title>
            <a
              href={post.url}
              target="_blank"
              className="link-secondary text-decoration-none"
            >
              {post.url}
            </a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PostsList;

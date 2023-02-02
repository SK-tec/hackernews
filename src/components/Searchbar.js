import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Searchbar = ({ news, setNews }) => {
  const [searchWord, setSearchWord] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${searchWord}`)
      .then((res) => {
        setNews(res.data.hits);
        console.log(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col sm={6}>
            <Form onSubmit={handleClick}>
              <Form.Control
                type="text"
                placeholder="Enter your Search Keyword here"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
              />
            </Form>
          </Col>
          <Col sm={4}>
            <Button varient="info" onClick={handleClick}>
              Search
            </Button>
          </Col>
        </Row>
      </Container>
      {/* <Container>
        {searchWord !== "" ? (
          news.map((element, index) => (
            <ul>
              <li>
                {element.title}{" "}
                <a href={element.url} target="_blank">
                  {element.url}
                </a>
              </li>
            </ul>
          ))
        ) : (
          <div
            style={{ minHeight: "150px" }}
            className="mt-5 bg-info d-flex justify-content-center align-items-center"
          >
            Welcome To HackerNews
          </div>
        )}
      </Container> */}
    </>
  );
};

export default Searchbar;

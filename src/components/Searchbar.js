import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const Searchbar = ({ news, setNews }) => {
  const [loading, setLoading] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  // const handleClick = (e) => {
  //   e.preventDefault();

  //   axios
  //     .get(`https://hn.algolia.com/api/v1/search?query=${searchWord}`)
  //     .then((res) => {
  //       setNews(res.data.hits);
  //       console.log(res.data.hits);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      axios
      .get(`https://hn.algolia.com/api/v1/search?query=${searchWord}`)
      .then((res) => {
        
        setNews(res.data.hits);

        console.log(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });},2000)
    
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
      {loading ? <Spinner /> : <p></p>}
     
    </>
  );
};

export default Searchbar;

import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Books from "../../components/Books";

class Search extends Component {
  state = {
    keywords: "",
    books: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.keywords) {
      API.searchBooks({ keywords: this.state.keywords })
        .then(res => this.setState({ books: res.data.items }))
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>Book Search</h3>
            <hr></hr>
            <form>
              <Input
                value={this.state.keywords}
                onChange={this.handleInputChange}
                name="keywords"
                placeholder="Keywords (required)"
              />
              <FormBtn
                disabled={!(this.state.keywords)}
                onClick={this.handleFormSubmit}
              >
                Search Google Books
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>Results</h3>
            <hr></hr>
            {this.state.books.length ? (
              this.state.books.map(book => (
                console.log(book.volumeInfo.authors.toString()),
                
                <Books key={book.id}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors.toString()}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "http://scottishbooktrust.com/files/styles/blog_detail/public/cover-not-available_206.png?itok=ImPHJNAF"}
                  link={book.volumeInfo.infoLink}
                />
              ))
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Search;
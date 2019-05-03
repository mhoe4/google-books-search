import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Card, CardBody, CardHeader } from "../../components/Card";

class Search extends Component {
  state = {
    keywords: "",
    books: []
  };

  handleSaveBook = event => {
    console.log(event);
  };

  handleViewBook = event => {
    console.log(event);
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
                Submit Book
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
                <Card key={book.id}>
                  <CardHeader title={book.volumeInfo.title} />
                  <CardBody 
                    authors={book.volumeInfo.authors} 
                    description={book.volumeInfo.description} 
                    onView={this.handleViewBook}
                    onSave={this.handleSaveBook} 
                  />
                  
                </Card>
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
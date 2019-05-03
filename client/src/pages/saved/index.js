import React, { Component } from 'react';
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Books from "../../components/Books";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount = () => {
        API.getBooks()
            .then(res => {
                console.log(res.data);
                this.setState({books: res.data})
            })
            .catch(err => console.log(err))
    };

    // constructor(props) {
    //     super(props);
    //     API.getBooks()
    //         .then(res => {
    //             this.state = { books: res.data };
    //             console.log("hi ------ ");
    //             console.log(this.state.books);
    //         })
    //         .catch(err => console.log(err));
    // }

    

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
                        <h3>Saved Books</h3>
                        <hr></hr>
                        {this.state.books.length ? (
                            this.state.books.map(book => (
                                console.log(book.authors.toString()),

                                <Books key={book._id}
                                    title={book.title}
                                    authors={book.authors.toString()}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                    page="saved"
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

export default Saved;
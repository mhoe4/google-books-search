import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Card, CardBody, CardHeader } from "../../components/Books";
import { DeleteBtn } from "../../components/DeleteBtn"


class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount = () => {
        API.getBooks()
            .then(res => {
                // console.log(res.data);
                this.setState({ books: res.data });
            })
            .catch(err => console.log(err))
    };

    handleDeleteEvent = (id) => {
        API.deleteBook(id)
            .then(res => {
                let found = this.state.books.filter(x => x._id != id);
                // console.log(found);
                this.setState({ books: found });
            })
            .catch(err => console.log(err))


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
                        <h3>Saved Books</h3>
                        <hr></hr>
                        {this.state.books.length ? (
                            this.state.books.map(book => (
                                <Card key={book._id} id={book._id}>
                                    <CardHeader title={book.title} />
                                    <CardBody
                                        authors={book.authors.toString()}
                                        description={book.description}
                                    >
                                        <DeleteBtn onClick={() => this.handleDeleteEvent(book._id)} />
                                    </CardBody>
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

export default Saved;
import React, { Component } from 'react';
import API from "../../utils/API";
import './style.css';

class Books extends Component {

  state = {
    title: "",
    authors: [],
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.setState({
      title: this.props.title,
      authors: this.props.authors.split(','),
      description: this.props.description,
      image: this.props.image,
      link: this.props.link
    });
  }

  handleSaveEvent = () => {

    // console.log(this.state);
    API.saveBook(this.state)
      .then(res => alert(`Saved Book Titled: ${res.data.title}!`))
      .catch(err => console.log(err))
    
  };

  handleViewEvent = () => {
    console.log("event");
  };

  render() {
    return (
      <div className="card" key={this.props.googleid}>
        <div className="card-header">
          Title: {this.state.title}
        </div>
        <div className="card-body">
          <h5 className="card-title">
            Author(s): {this.state.authors}
            <button onClick={this.handleSaveEvent} className="btn btn-primary m-button">Save</button>
            <button onClick={this.handleViewEvent} className="btn btn-secondary m-button">View</button>
          </h5>
          <p className="card-text">Description: {this.state.description}</p>
        </div>
      </div>
    );
  }

}

export default Books;

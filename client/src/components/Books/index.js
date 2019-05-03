import React, { Component } from 'react';
import API from "../../utils/API";
import { SaveBtn } from "../../components/SaveBtn"
import { DeleteBtn } from "../../components/DeleteBtn"

class Books extends Component {

  state = {
    title: "",
    authors: [],
    description: "",
    image: "",
    link: "",
    page: ""
  };

  componentDidMount() {
    this.setState({
      title: this.props.title,
      authors: this.props.authors.split(','),
      description: this.props.description,
      image: this.props.image,
      link: this.props.link,
      page: this.props.page
    });
  }

  handleSaveEvent = () => {

    // console.log(this.state);
    API.saveBook(this.state)
      .then(res => alert(`Saved Book Titled: ${res.data.title}!`))
      .catch(err => console.log(err))
    
  };

  handleDeleteEvent = () => {

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
            {this.state.page === "search" ? (
              <SaveBtn onClick={this.handleSaveEvent} />
            )
             : (
              <DeleteBtn onClick={this.handleDeleteEvent} />
              )}
            
          </h5>
          <p className="card-text">Description: {this.state.description}</p>
        </div>
      </div>
    );
  }

}

export default Books;

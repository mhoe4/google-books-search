import React from "react";

export function Card(props) {
  return (
    <div className="card" {...props}>
      {props.children}
    </div>
  );
}

export function CardHeader(props) {
  return (
    <div className="card-header">
      Title: {props.title}
    </div>
  );
}

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

export function CardBody(props) {
  return (
    <div className="card-body">
      <h5 className="card-title">
        Author(s): {insert(props.authors, props.authors.indexOf(',') + 1, " ")}
        {props.children}
      </h5>
      <p className="card-text">Description: {props.description}</p>
    </div>
  );
}


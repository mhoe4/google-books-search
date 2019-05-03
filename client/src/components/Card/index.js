import React from "react";
import "./style.css";

export function Card(props) {
  return (
    <div className="card" {...props}>
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

export function CardBody(props) {
  return (
    <div className="card-body">
        <h5 className="card-title">
          Author(s): {props.authors}
          <button onClick={props.onSave} className="btn btn-primary m-button">Save</button>
          <button onClick={props.onView} className="btn btn-secondary m-button">View</button>
        </h5>
        <p className="card-text">Description: {props.description}</p>
      </div>
  );
}
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { Badge } from "react-bootstrap";

export class News extends Component {

  

  render() {
    return (
      <div className="card-div my-2 py-2">
        <div className="card">
          <img
            className="card-img-top "
            src={this.props.imageURL}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title} <Badge pill bg="danger">
        New
        </Badge></h5> 
     
        <  small> <Badge  bg="secondary">
       {this.props.author}
        </Badge></small> 

            <p className="card-text">{this.props.description}</p>
            <a href={this.props.newsURL} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

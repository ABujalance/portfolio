import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";

export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const techLabels = this.props.techList.map(i => (
      <span>
        <span className="label label-info">{i}</span>
        <span>&nbsp;</span>
      </span>
    ));

    return (
      <div className="card shadow rounded">
        <img src={this.props.image} className="card-img-top" alt="Project" />
        <div className="card-header text-center p-0">
          <h3 className="card-title h3">{this.props.title}</h3>
        </div>
        <div className="card-footer">{techLabels}</div>
        <div className="overlay">
          <div className="text">
            <p>{this.props.bodyText}</p>
            <br />
            {this.props.link != null && (
              <a href={this.props.link} className="btn btn-sm btn-outline-light">
                Check this project!
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Project.defaultProps = {
  techList: []
};

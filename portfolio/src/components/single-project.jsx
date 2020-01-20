import React, { Component } from "react";

import "../App.css";

export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const techLabels = this.props.techList.map(i => <span><span class="label label-info">{i}</span><span>&nbsp;</span></span>);
  

    return (
      <div className="col-sm-12 col-md-6 col-lg-4 mt-5 animate-box d-flex align-items-stretch">
        <div className="card shadow rounded">
          <img src={this.props.image} className="card-img-top" alt="Project" />
          <div className="card-header text-center p-0">
            <h3 className="card-title h3">{this.props.title}</h3>
          </div>
          <div className="card-footer">{techLabels}</div>
          <div class="overlay">
            <div class="text">
              <p>{this.props.bodyText}</p>
              <br />
              {this.props.link != null && (
                <a href={this.props.link} class="btn btn-outline-light">
                  See this project!
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Project.defaultProps={
  techList:[]
}

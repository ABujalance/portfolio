import React, { Component } from "react";

import "../App.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardColumns = "col-sm-12 col-md-6 col-lg-4 mt-5 animate-box";
    const cardStyle = "card shadow ";

    return (
      <div className={cardColumns}>
        <div className={cardStyle}>
          <img
            src="images/caser_mapa_agentes.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
              {this.props.bodyText}
            </p>
            <a href={this.props.link} rel="noopener noreferrer" target="_blank" class="stretched-link"></a>
          </div>
        </div>
      </div>
    );
  }
}

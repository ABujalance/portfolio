import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    const iconClass = "icon-" + this.props.icon;
    const colorClass = "services color-" + this.props.colorNumber;
    return (
      <div className="col-md-4 text-center animate-box">
        <div className={colorClass}>
          <span className="icon">
            <i className={iconClass} />
          </span>
          <div className="desc">
            <h3>{this.props.title} </h3>
            <p>{this.props.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

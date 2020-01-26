import React, { Component } from "react";
import i18n from 'i18next';
import { withTranslation } from "react-i18next";



class Project extends Component {


  render() {

    const { t } = this.props;

    const techLabels = this.props.techList.map(i => (
        <span className="btn btn-sm btn-info m-1">{i}</span>
    ));

    return (
      <div className="card shadow rounded mb-5">
        <img src={this.props.image} className="card-img-top" alt="Project" />
        <div className="card-header text-center p-0">
          <h3 className="card-title h3 m-2">{this.props.title}</h3>
        </div>
        <div className="card-footer">{techLabels}</div>
        <div className="overlay">
          <div className="text">
            <p className=" overflow-auto">{this.props.bodyText}</p>
            <br />
            {this.props.link != null && (
              <a href={this.props.link} className="btn btn-outline-light">
                {t("portfolio.projects.button")}
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

export default withTranslation()(Project);
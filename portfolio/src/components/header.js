import React from "react";
import { withTranslation } from "react-i18next";
import { Component } from "react";
import i18nChange from "../i18n";

class Header extends Component {
  render() {
    const { t } = this.props;
    const changeLanguage = lng => {
      i18nChange.changeLanguage(lng);
    };
    return (
      <header className="masthead d-flex">
        <div className="container text-center my-auto">
          <h1 className="mb-1">Alberto Bujalance</h1>
          <h3 className="mb-5">
            <em> {t("header.subtitle")}</em>
          </h3>

          <a
            className="btn btn-primary btn-xl js-scroll-trigger"
            href="#portfolio"
          >
            Find Out More
          </a>
         
        </div>
        <div className="overlay" />
      </header>
    );
  }
}
export default withTranslation()(Header);

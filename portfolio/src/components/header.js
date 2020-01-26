import React from "react";
import { withTranslation } from "react-i18next";
import { Component } from "react";
import i18nChange from "../i18n";
import i18n from "i18next";

class Header extends Component {
  render() {
    const langList = [
      { key: "en-US", desc: "English" },
      { key: "es-ES", desc: "Castellano" }
    ];
    console.log(i18n.languages[0]);
    var currLang = langList.find(lang => lang.key === i18n.languages[0]);
    if (typeof currLang === "undefined") {
      currLang = { key: "en-US", desc: "English" };
    }

    const { t } = this.props;

    const changeLanguage = lng => {
      i18nChange.changeLanguage(lng);
      window.location.reload();
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
            {t("header.findMore")}
          </a>
          <h4 className="mt-5">
            {t("header.currentLanguage")}&nbsp;
            <span className="language-selector">
              <b>
                <u>{currLang.desc}</u>&#9662;
              </b>
              <div id="languages-list">
                {langList.map(language => (
                  <li key={language.key}>
                    <a onClick={() => changeLanguage(language.key)}>
                      <b>{language.desc}</b>
                    </a>
                  </li>
                ))}
              </div>
            </span>
          </h4>
        </div>
        <div className="overlay" />
      </header>
    );
  }
}
export default withTranslation()(Header);

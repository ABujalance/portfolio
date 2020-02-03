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
        <div className="container text-center text-white my-auto" >
          <h1 className="mb-1" style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Alberto Bujalance</h1>
          <h3 className="mb-5" style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>
            <em> {t("header.subtitle")}</em>
          </h3>

          <a
            className="btn shadow btn-lg btn-light btn-xl js-scroll-trigger"
            href="#portfolio"
          >
            <b>{t("header.findMore")}</b>
          </a>
          <a
            className="btn shadow btn-lg btn-light btn-xl js-scroll-trigger"
            href="./resources/Alberto_Bujalance_Resume_CV.pdf"
            download="Alberto_Bujalance_Resume.pdf"
          >
            <b>{t("header.download")}{"  "}<i class="fa fa-download"></i></b>
          </a>
          <h4 className="mt-5">
            {t("header.currentLanguage")}<br/>
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

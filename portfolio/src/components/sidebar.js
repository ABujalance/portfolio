import React from "react";
import { withTranslation } from "react-i18next";
import i18n from "i18next";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  }
  render() {
    const { t } = this.props;

    const siteNav = [
      {
        title: t("sidebar.home"),
        url: "#top"
      },
      {
        title: t("sidebar.portfolio"),
        url: "#portfolio"
      },
      {
        title: t("sidebar.about"),
        url: "#about"
      },
      {
        title: t("sidebar.skills"),
        url: "#skills"
      },

      {
        title: t("sidebar.cv"),
        url: "#cv"
      }
    ];
    return [
      <a
        key={"nav-menu-button"}
        className="menu-toggle rounded"
        onClick={() => this.onMenuClick()}
      >
        <i
          className={`fas ${this.state.sidebarOpen ? "fa-times" : "fa-bars"}`}
        />
      </a>,
      <nav
        key={"nav-menu"}
        id="sidebar-wrapper"
        className={this.state.sidebarOpen ? "active" : ""}
      >
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a className="js-scroll-trigger" href="#top">
              <b>Alberto Bujalance</b>
            </a>
          </li>
          {siteNav.map(link => (
            <li
              key={link.url}
              className="sidebar-nav-item"
              onClick={() => this.onMenuItemClick()}
            >
              <b>
                <a className="js-scroll-trigger" href={link.url}>
                  {link.title}
                </a>
              </b>
            </li>
          ))}
        </ul>
      </nav>
    ];
  }
  onMenuItemClick() {
    this.setState({ sidebarOpen: false });
  }
  onMenuClick() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
    //      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    //    $(this).toggleClass("active");
  }
}
export default withTranslation()(Sidebar);

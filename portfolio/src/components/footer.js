import React from "react";
import { withTranslation } from "react-i18next";
const socialSites = [
  {
    link: "https://www.linkedin.com/in/alberto-bujalance-178062144/",
    icon: "icon-social-linkedin"
  },
  {
    link: "https://github.com/ABujalance",
    icon: "icon-social-github"
  }
];
const FooterSection = ({ t }) => (
  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
        {socialSites.map((site, index) => (
          <li className="list-inline-item" key={`social_${index}`}>
            <a
              className="social-link rounded-circle text-white mr-3"
              href={site.link}
            >
              <i className={site.icon} />
            </a>
          </li>
        ))}
        <li className="list-inline-item">
          <a
            className="social-link rounded-circle text-white mr-3"
            href="mailto:mail@abujalance.com"
          >
            <i className="icon-envelope" />
          </a>
        </li>
      </ul>
      <p>{t("social.mail")}: mail@abujalance.com</p>
      <p className="text-muted small mb-0">Copyright &copy; Abujalance 2020</p>
    </div>
  </footer>
);
export default withTranslation()(FooterSection);

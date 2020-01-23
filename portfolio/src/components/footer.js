import React from "react";
const socialSites = [
  {
    link: "https://www.linkedin.com/in/alberto-bujalance-178062144/",
    icon: "icon-social-linkedin"
  },
  {
    link: "https://twitter.com/DeadpixelG",
    icon: "icon-social-twitter"
  },
  {
    link: "https://github.com/ABujalance",
    icon: "icon-social-github"
  }
];
const FooterSection = () => (
  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
      {socialSites.map((site,index)=>(
        <li className="list-inline-item" key={`social_${index}`}>
          <a className="social-link rounded-circle text-white mr-3" href={site.link}>
            <i className={site.icon} />
          </a>
        </li>
      ))}
      </ul>
      <p>Contacto: mail@abujalance.com &nbsp;<i className="icon-envelope" /></p>
      <p className="text-muted small mb-0">
        Copyright &copy; Abujalance 2020
      </p>
    </div>
  </footer>
);
export default FooterSection;

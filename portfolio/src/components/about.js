import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { withTranslation } from "react-i18next";

const AboutSection = ({ t }) => (
  <ScrollableAnchor id="about">
    <section
      style={{ position: "relative", paddingTop: "30%" }}
      className="content-section bg-foto-yo"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6"></div>
          <div style={{ backgroundColor: "rgba(0, 0, 0, .7)", width: "100%" }}>
            {" "}
            <h2 style={{ fontSize: 50 }} className="text-light big-text m-3">
              {t("about.title")}
            </h2>
            <p style={{ fontSize: 30 }} className="text-light lead m-5">
              <b>{t("about.desc")}</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default withTranslation()(AboutSection);

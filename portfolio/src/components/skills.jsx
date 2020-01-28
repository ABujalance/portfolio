import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Skill from "./skill.jsx";
import skillData from "../data/skills.json";
import { withTranslation } from "react-i18next";

class Skills extends Component {
  render() {
    const skillList = skillData.skills;
    const { t } = this.props;
    return (
      <ScrollableAnchor id="skills">
        <section className="content-section">
          <div className="container-fluid text-center">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 >
                  {t("skills.title")}
                </h2>
              </div>
            </div>
            <br /> <br /> <br />
            <div className="row row-pt-md">
              {skillList.map(skill => (
                <Skill
                  title={t(skill.title)}
                  desc=""
                  icon={skill.icon}
                  colorNumber={skill.colorNumber}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default withTranslation()(Skills)

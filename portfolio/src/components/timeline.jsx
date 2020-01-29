import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { withTranslation } from "react-i18next";

class Timeline extends Component {
  render() {
    const { t } = this.props;
    return (
      <ScrollableAnchor id="cv">
        <section className="content-section">
          <div className="container-fluid text-center">
            <section className="colorlib-experience" data-section="timeline">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div
                    className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <h2>{t("timeline.title")}</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="timeline-centered">
                      <article
                        className="timeline-entry animate-box"
                        data-animate-effect="fadeInLeft"
                      >
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-3">
                            <i className="icon-note" />
                          </div>
                          <div className="timeline-label">
                            <h2>
                              {t("timeline.babel.title")}{" "}
                              <span>2019-{t("timeline.present")}</span>
                            </h2>
                            <p>{t("timeline.babel.desc")} </p>
                          </div>
                        </div>
                      </article>
                      <article
                        className="timeline-entry animate-box"
                        data-animate-effect="fadeInTop"
                      >
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-4">
                            <i className="icon-graduation" />
                          </div>
                          <div className="timeline-label">
                            <h2>
                              {t("timeline.master.title")}{" "}
                              <span>2018-2019 Universidad de Sevilla</span>
                            </h2>
                            <p> {t("timeline.master.desc")} </p>
                          </div>
                        </div>
                      </article>
                      <article
                        className="timeline-entry animate-box"
                        data-animate-effect="fadeInLeft"
                      >
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-5">
                            <i className="icon-note" />
                          </div>
                          <div className="timeline-label">
                            <h2>
                              {t("timeline.tier.title")} <span>2017-2019</span>
                            </h2>
                            <p>{t("timeline.tier.desc")} </p>
                          </div>
                        </div>
                      </article>
                      <article
                        className="timeline-entry animate-box"
                        data-animate-effect="fadeInLeft"
                      >
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-6">
                            <i className="icon-graduation" />
                          </div>
                          <div className="timeline-label">
                            <h2>
                              {t("timeline.degree.title")}{" "}
                              <span>2013-2018 Universidad de Sevilla</span>
                            </h2>
                            <p> {t("timeline.degree.desc")} </p>
                          </div>
                        </div>
                      </article>
                      <article
                        className="timeline-entry begin animate-box"
                        data-animate-effect="fadeInBottom"
                      >
                        <div className="timeline-entry-inner">
                          <div className="timeline-icon color-none"></div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default withTranslation()(Timeline);

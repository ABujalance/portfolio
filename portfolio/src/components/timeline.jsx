import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
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
                          Babel Sistemas de Información<span>2019-present</span>
                        </h2>
                        <p>
                          I joined Babel on May, and since then I've been
                          learning new ways to do projects
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-note" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Master in Data Science and Software Engineering
                          <span>2018-2019</span>
                        </h2>
                        <p>Ya no me apetece inventarme más texto</p>
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
                          Tier 1 S.A. <span>2017-2019</span>
                        </h2>
                        <p>Regular la cosa</p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-note" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Computer Engineering Degree<span>2013-2018</span>
                        </h2>
                        <p>Ha costao</p>
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
    );
  }
}
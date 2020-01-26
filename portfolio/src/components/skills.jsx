import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

export default class Skills extends Component {
  render() {
    return (
      <ScrollableAnchor id="skills">
        <section className="content-section">
          <div className="container-fluid text-center">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <br /> <br /> <br />
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-globe" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam facilisis quis lorem et tempor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                      As I studied Computer Engineering, the main focus was in
                      Algorithms, Design and Project management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-equalizer" />
                  </span>
                  <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>
                      I can work with tools like Jenkins and Dockers and am used
                      to michroservices architectures
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-rocket" />
                  </span>
                  <div className="desc">
                    <h3>This box can move</h3>
                    <p>I was actually just testing stuff </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-magic-wand" />
                  </span>
                  <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>I'll ask my friend Uñuñu's Art</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        Can I condemn this man to slavery Pretend I do not feel
                        his agony This innocent who bears my face Who goes to
                        judgement in my place{" "}
                      </p>
                      <h3 className="colorlib-heading">Who am I?</h3>{" "}
                      <p>
                        Can I conceal myself for evermore? Pretend I'm not the
                        man I was before? And must my name until I die Be no
                        more than an alibi? Must I lie? How can I ever face my
                        fellow men? How can I ever face myself again? My soul
                        belongs to God, I know I made that bargain long ago He
                        gave me hope when hope was gone He gave me strength to
                        journey on
                      </p>{" "}
                      <h3 className="colorlib-heading">Who am I?</h3>{" "}
                      <h3 className="colorlib-heading">Who am I?</h3>{" "}
                      <p>
                        I am Jean Valjean! And so Javert, you see it's true That
                        man bears no more guilt than you!{" "}
                      </p>{" "}
                      <h3 className="colorlib-heading">Who am I?</h3>{" "}
                      <h1 className="colorlib-heading">24601!</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
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
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
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
                    <i className="icon-phone3" />
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
                    <i className="icon-data" />
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
                    <i className="icon-data" />
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
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>I'll ask my friend Uñuñu's Art</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I won't say Im adict to social networking... but I am. </p>
                </div>
                </div>
            </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

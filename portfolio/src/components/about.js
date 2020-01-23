import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-foto-yo">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <h2 style={{ fontSize: 40,textShadow: "2px 2px black" }} className="text-light big-text">
              I'm a Software Engineer, and I need a new Picture!
            </h2>
            <p style={{ fontSize: 30,textShadow: "2px 2px black"  }} className="text-light lead mb-5">
              <b>
                I won't write any further description until I get a decent
                picture. This text will later be dark since I want the photo to
                have a clear background. White if possible but we'll see.
                Fernando pls help
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;

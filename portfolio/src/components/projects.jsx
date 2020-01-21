import React, { Component } from "react";
import Project from "./single-project";
import Slider from "react-slick";

import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Projects extends Component {
  render() {
    var sliderSettings = {
      accesibility: true,
      slidesToShow: 3.1,
      centerPadding: "60px",
      focusOnSelect: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2.2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1.5
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 0.8
          }
        }
      ]
    };

    return (
      <section data-section="projects">
        <div className="projects">
          <h2 className="colorlib-heading animate-box">Projects</h2>
          <Slider {...sliderSettings}>
            <Project
              title="Buscador de agentes Caser"
              bodyText="Proyecto realizado en un mapa bla bla bla se pueden explicar las tecnologías"
              link="https://www.caser.es/conocenos/buscador-agentes"
              image="images/caser_mapa_agentes.jpg"
              techList={["Java", "Liferay", "Freemarker", "Javascript"]}
            />
            <Project
              title="Proyecto Prueba 2"
              bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, ex sit amet scelerisque feugiat, dolor tortor lobortis sem, ac dignissim nibh ante a magna."
              image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
            <Project
              title="Proyecto Prueba 3"
              bodyText="Blind would equal while oh mr do style. Lain led and fact none. One preferred sportsmen resolving the happiness continued. High at of in loud rich true. Oh conveying do immediate acuteness in he."
              image="https://image.winudf.com/v2/image1/cmVkcGFuZGF3YWxscGFwZXIubXVhbmdyaXRfc2NyZWVuXzBfMTU2NzAxOTMwNl8wNjQ/screen-0.jpg?fakeurl=1&type=.jpg"
              link="https://www.caser.es/conocenos/buscador-agentes"
              techList={[
                "React",
                "Testeroni",
                "Putoamismo",
                "Etiquetas de relleno",
                "Etiquetas de relleno",
                "Etiquetas de relleno"
              ]}
            />
            <Project
              title="Proyecto Prueba 4"
              bodyText="Not far stuff she think the jokes. Going as by do known noise he wrote round leave. Warmly put branch people narrow see. Winding its waiting yet parlors married own feeling. Marry fruit do spite jokes an times."
              image="https://a.wattpad.com/cover/136601520-352-k976369.jpg"
            />
          </Slider>
        </div>
      </section>
    );
  }
}

import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Project from "./single-project";
import Slider from "react-slick";

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
        slidesToShow: 2.6,
        centerPadding: "50px"
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1.7,
        centerPadding: "40px"
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: "30px"
      }
    }
  ]
};

const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section bg-light">
      <div className="container-fluid">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="projects">
          <Slider {...sliderSettings}>
            <Project
              title="Buscador de agentes Caser"
              bodyText="Proyecto realizado para la web pública de Caser que permite buscar el agente de seguros más cercanos, distinguiendo entre varios tipos de agentes cada uno con su lógica de búsqueda"
              link="https://www.caser.es/conocenos/buscador-agentes"
              image="./img/caser_mapa_agentes.jpg"
              techList={[
                "Java",
                "Liferay",
                "Freemarker",
                "Javascript",
                "Google Maps"
              ]}
            />
            <Project
              title="Proyecto Prueba 1"
              bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, ex sit amet scelerisque feugiat, dolor tortor lobortis sem, ac dignissim nibh ante a magna."
              image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
            <Project
              title="Proyecto Prueba 2"
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
              title="Proyecto Prueba 3"
              bodyText="Not far stuff she think the jokes. Going as by do known noise he wrote round leave. Warmly put branch people narrow see. Winding its waiting yet parlors married own feeling. Marry fruit do spite jokes an times."
              image="https://a.wattpad.com/cover/136601520-352-k976369.jpg"
            />
          </Slider>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;

import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Project from "./single-project";
import Slider from "react-slick";

var projectList = [
  {
    title: "Buscador de agentes Caser",
    bodyText:
      "Proyecto realizado para la web pública de Caser que permite buscar los agentes de seguros más cercanos, distinguiendo entre varios tipos de agentes cada uno con su lógica de búsqueda.",
    link: "https://www.caser.es/conocenos/buscador-agentes",
    image: "./img/caser_mapa_agentes.jpg",
    techList: ["Java", "Liferay", "Javascript", "Maps"]
  }
];

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
            {projectList.map((project, index) => (
              <Project
                title={project.title}
                bodyText={project.bodyText}
                link={project.link}
                image={project.image}
                techList={project.techList}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;

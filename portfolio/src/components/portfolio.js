import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Project from "./single-project";
import Slider from "react-slick";
import i18n from "i18next";
import { withTranslation } from "react-i18next";

var projectList = [
  {
    title: t("portfolio.project.caserMapa.title"),
    bodyText: t("portfolio.project.caserMapa.desc"),
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

const PortfolioSection = ({ t }) => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section bg-light">
      <div className="container-fluid">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">{t("sidebar.portfolio")}</h3>
          <h2 className="mb-5">{t("portfolio.projects")}</h2>
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

export default withTranslation()(PortfolioSection);

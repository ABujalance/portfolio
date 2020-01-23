import React from "react";
import ReactDOM from "react-dom";

import "./scss/stylish-portfolio.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import "./animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Sidebar from "./components/sidebar";
import Header from "./components/header";
import AboutSection from "./components/about";
import ServicesSections from "./components/services";
import PortfolioSection from "./components/portfolio";
import CallToAction from "./components/callToAction";
import MapSection from "./components/map";
import FooterSection from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import Skills from "./components/skills";
import Timeline from "./components/timeline";

class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
        <PortfolioSection />
        <AboutSection />
        <Skills />
        <Timeline />
        <FooterSection />
        <ScrollToTop />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

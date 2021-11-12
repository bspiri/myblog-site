import React, { Component } from "react";
import ComponentHeader from "../Components/ComponentHeader";
import AboutContent from "../Components/AboutContent";
import Footer from "../Components/Footer";

class About extends Component {
  render() {
    return (
      <div>
        <ComponentHeader />
        <AboutContent />
        <Footer />
      </div>
    );
  }
}

export default About;

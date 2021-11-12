import React, { Component } from "react";
import ComponentHeader from "../Components/ComponentHeader";
import PageHeader from "../Components/PageHeader";
import PortfolioItems from "../Components/PortfolioItems";
// import PageCounter from "../Components/PageCounter";
import Footer from "../Components/Footer";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <ComponentHeader />
        <PageHeader title="Portfolio" />
        <PortfolioItems />
        {/* <PageCounter /> */}
        <Footer />
      </div>
    );
  }
}

export default Portfolio;

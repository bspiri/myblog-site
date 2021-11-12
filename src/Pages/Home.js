import React, { Component } from "react";
import MainHeader from "../Components/MainHeader";
import Carousel from "../Components/Carousel";
import BlogItems from "../Components/BlogItems";
// import PageCounter from "../Components/PageCounter";
import Footer from "../Components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Carousel />
        <BlogItems />
        {/* <PageCounter /> */}
        <Footer />
      </div>
    );
  }
}

export default Home;

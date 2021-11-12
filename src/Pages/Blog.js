import React, { Component } from "react";
import ComponentHeader from "../Components/ComponentHeader";
import PageHeader from "../Components/PageHeader";
import BlogItems from "../Components/BlogItems";
// import PageCounter from "../Components/PageCounter";
import Footer from "../Components/Footer";

class Blog extends Component {
  render() {
    return (
      <div>
        <ComponentHeader />
        <PageHeader title="Blog" />
        <BlogItems />
        {/* <PageCounter /> */}
        <Footer />
      </div>
    );
  }
}

export default Blog;

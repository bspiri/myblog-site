import React, { Component } from "react";
import ComponentHeader from "../Components/ComponentHeader";
import PageHeader from "../Components/PageHeader";
import PostDetail from "../Components/PostDetail";
import PostComments from "../Components/PostComments";
import Footer from "../Components/Footer";

class Post extends Component {
  render() {
    return (
      <div>
        <ComponentHeader />
        <PageHeader />
        <PostDetail />
        <PostComments />
        <Footer />
      </div>
    );
  }
}

export default Post;

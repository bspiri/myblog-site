import React, { Component } from "react";
import ComponentHeader from "../Components/ComponentHeader";
import ContactContent from "../Components/ContactContent";
import Footer from "../Components/Footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <ComponentHeader />
        <ContactContent />
        <Footer />
      </div>
    );
  }
}

export default Contact;

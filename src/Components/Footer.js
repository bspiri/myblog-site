import React, { Component } from "react";
import { Typography, Box, Link } from "@material-ui/core/";

function Copyright() {
  return (
    <Typography variant="body4" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        bspiri.com
      </Link>{" "}
      {new Date().getFullYear()} | Design by{" "}
      <a href="www.styleshout.com/" target="_blank">
        www.styleshout.com
      </a>
    </Typography>
  );
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldTopButtonVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleTopButton);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleTopButton);
  }

  handleTopButton = (e) => {
    if (window.scrollY >= 900) {
      this.setState({ shouldTopButtonVisible: true });
    } else {
      this.setState({ shouldTopButtonVisible: false });
    }
  };

  render() {
    let topButton = (
      <div className="ss-go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M7.5 1.5l.354-.354L7.5.793l-.354.353.354.354zm-.354.354l4 4 .708-.708-4-4-.708.708zm0-.708l-4 4 .708.708 4-4-.708-.708zM7 1.5V14h1V1.5H7z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
    );

    if (this.state.shouldTopButtonVisible === false) {
      topButton = "";
    }

    return (
      <div>
        <footer className="s-footer">
          <div className="s-footer__main">
            <div className="row"></div>
          </div>
          <div className="s-footer__bottom">
            <div className="row">
              <div className="column">
                <Box pt={4}>
                  <Copyright />
                </Box>
              </div>
            </div>
            {topButton}
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

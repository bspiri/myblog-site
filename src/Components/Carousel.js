import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/post`)
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      arrows: false,
      dots: true,
      speed: 1000,
      fade: true,
      autoplay: false,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      dotsClass: "newSlick-dots",
    };

    return (
      <section id="hero" className="s-hero">
        <Slider
          ref={(c) => (this.slider = c)}
          {...settings}
          className="s-hero__slider"
        >
          {this.state.posts.map((post) => {
            return (
              <div key={post.id} className="s-hero__slide">
                <div
                  className="s-hero__slide-bg slide1"
                  style={{ backgroundImage: `url(${post.image_path})` }}
                ></div>
                <div className="row s-hero__slide-content animate-this animated">
                  <div className="column">
                    <h1 className="s-hero__slide-text">
                      <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        <div className="s-hero__social hide-on-mobile-small">
          <p>Follow</p>
          <span></span>
          <ul className="s-hero__social-icons">
            <li>
              <a href="https://github.com/bspiri">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/serdar-piri/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-arrows s-hero__nav-arrows">
          <button onClick={this.previous} className="s-hero__arrow-prev">
            <svg
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
            >
              <path
                d="M1.5 7.5l4-4m-4 4l4 4m-4-4H14"
                stroke="currentColor"
              ></path>
            </svg>
          </button>
          <button onClick={this.next} className="s-hero__arrow-next">
            <svg
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
            >
              <path
                d="M13.5 7.5l-4-4m4 4l-4 4m4-4H1"
                stroke="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </section>
    );
  }
}

export default Carousel;

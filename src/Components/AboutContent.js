import React, { useState, useEffect } from "react";
import axios from "axios";

function AboutContent() {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/about`)
      .then(function (response) {
        console.log(response.data);
        setAbout(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <section className="s-content">
      <div className="row">
        <div className="column large-12">
          <article className="s-content__entry">
            <div className="s-content__media">
              <img
                src="images/thumbs/about/about-1050.jpg"
                srcSet="
                    images/thumbs/about/about-2100.jpg 2100w,
                    images/thumbs/about/about-1050.jpg 1050w,
                    images/thumbs/about/about-525.jpg   525w
                  "
                sizes="(max-width: 2100px) 100vw, 2100px"
                alt=""
              />
            </div>

            <div className="s-content__entry-header">
              <h1 className="s-content__title">Learn More About Me.</h1>
            </div>

            <div className="s-content__primary">
              <div className="s-content__page-content">
                <p
                  className="lead"
                  dangerouslySetInnerHTML={{
                    __html: about.content,
                  }}
                />

                <br />

                <div className="row block-large-1-2 block-tab-full s-content__blocks"></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;

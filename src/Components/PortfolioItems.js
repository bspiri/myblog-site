import React, { useState, useEffect } from "react";
import axios from "axios";

function PortfolioItems() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/portfolio`)
      .then(function (response) {
        setPortfolio(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <section className="s-content s-content--no-top-padding">
      <div className="s-bricks">
        <div className="masonry">
          <div className="bricks-wrapper h-group articlefix">
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {portfolio.map((item) => {
              return (
                <article
                  key={item.id}
                  className="brick entry aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="entry__thumb">
                    <a href={item.url} className="thumb-link">
                      <img src={item.image_path} alt="" />
                    </a>
                  </div>

                  <div className="entry__text">
                    <div className="entry__header">
                      <h1 className="entry__title">
                        <a href={item.url}>{item.title}</a>
                      </h1>
                    </div>
                    <div className="entry__excerpt">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.content,
                        }}
                      />
                    </div>
                    <a className="entry__more-link" href={item.url}>
                      Learn More
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioItems;

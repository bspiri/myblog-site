import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogItems() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/post`)
      .then(function (response) {
        setBlog(response.data);
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
            {blog.map((item) => {
              return (
                <article
                  key={item.id}
                  className="brick entry aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="entry__thumb">
                    <Link to={`/posts/${item.id}`} className="thumb-link">
                      <img src={item.image_path} alt="" />
                    </Link>
                  </div>

                  <div className="entry__text">
                    <div className="entry__header">
                      <h1 className="entry__title">
                        <Link to={`/posts/${item.id}`}>{item.title}</Link>
                      </h1>
                    </div>
                    <div className="entry__excerpt">
                      <p>{item.summary}</p>
                    </div>
                    <Link className="entry__more-link" to={`/posts/${item.id}`}>
                      Learn More
                    </Link>
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

export default BlogItems;

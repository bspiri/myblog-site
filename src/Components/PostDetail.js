import React, { useState, useEffect } from "react";
import moment from "moment";
import { useParams } from "react-router";
import axios from "axios";

function PostDetail() {
  let { post_id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/post/${post_id}`)
      .then(function (response) {
        response.data.create_date = moment(response.data.create_date).format(
          "DD-MMM-YYYY"
        );

        setBlog(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [post_id]);
  return (
    <section className="s-content">
      <div className="row">
        <div className="column large-12">
          <article className="s-content__entry format-standard">
            <div className="s-content__media">
              <div className="s-content__post-thumb">
                <img src={blog.image_path} alt="" />
              </div>
            </div>
            <div className="s-content__entry-header">
              <h1 className="s-content__title s-content__title--post">
                {blog.title}
              </h1>
            </div>
            <div className="s-content__primary">
              <div className="s-content__entry-content">
                <p dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
              <div className="s-content__entry-meta">
                <div className="meta-bottom">
                  <div className="entry-cat-links meta-blk">
                    <span>On </span>
                    {blog.create_date}
                  </div>
                </div>
              </div>
              {/* <div className="s-content__pagenav">
                <div className="prev-nav">
                  <a href="#" rel="prev">
                    <span>Previous</span>
                    Previous post
                  </a>
                </div>
                <div className="next-nav">
                  <a href="#" rel="next">
                    <span>Next</span>Next post
                  </a>
                </div>
              </div> */}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default PostDetail;

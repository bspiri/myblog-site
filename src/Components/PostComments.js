import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import moment from "moment";

function PostComments() {
  let { post_id } = useParams();
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/post/${post_id}/comment`)
      .then(function (response) {
        response.data.map((item) => {
          return (item.create_date = moment(item.create_date).format(
            "DD-MMM-YYYY"
          ));
        });
        setComments(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [post_id]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/post/${post_id}/comment`, {
        author: name,
        content: message,
      })
      .then(function (response) {
        console.log("Comment saved");
        setName("");
        setMessage("");
        setAlert(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  let alertHtml = "";
  if (alert === true) {
    alertHtml = <p className="alert">Message sent!</p>;
  }
  return (
    <div className="comments-wrap">
      <div id="comments" className="row">
        <div className="column large-12">
          <h3>{comments.length} Comments</h3>
          {comments.map((comment) => {
            return (
              <ol className="commentlist" key={comment.id}>
                <li className="depth-1 comment">
                  <div className="comment__content">
                    <div className="comment__info">
                      <div className="comment__author">{comment.author}</div>
                      <div className="comment__meta">
                        <div className="comment__time">
                          {comment.create_date}
                        </div>
                      </div>
                    </div>
                    <div className="comment__text">
                      <p>{comment.content}</p>
                    </div>
                  </div>
                </li>
              </ol>
            );
          })}
        </div>
      </div>
      <div className="row comment-respond">
        <div id="respond" className="column">
          <h3>Add Comment</h3>

          <fieldset>
            <div className="form-field">
              <input
                name="cName"
                id="cName"
                className="h-full-width h-remove-bottom"
                placeholder="Your Name"
                value={name}
                onChange={handleName}
                type="text"
              />
            </div>

            <div className="message form-field">
              <textarea
                name="cMessage"
                id="cMessage"
                className="h-full-width"
                placeholder="Your Message"
                value={message}
                onChange={handleMessage}
              ></textarea>
            </div>
            <br />
            {alertHtml}
            <button
              name="submit"
              id="submit"
              className="btn btn--primary btn-wide btn--large h-full-width"
              onClick={handleSubmit}
            >
              Add Comment
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default PostComments;

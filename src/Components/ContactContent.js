import React from "react";
import axios from "axios";

export default function ContactContent() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [alert, setAlert] = React.useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/contact`, {
        name: name,
        email: email,
        message: message,
      })
      .then(function (response) {
        console.log("Contact message saved");
        setName("");
        setEmail("");
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
    <section className="s-content">
      <div className="row">
        <div className="column large-12">
          <article className="s-content__entry">
            <div className="s-content__media">
              <img src="images/thumbs/contact/contact-1050.jpg" alt="" />
            </div>

            <div className="s-content__entry-header">
              <h1 className="s-content__title">Get In Touch With Me.</h1>
            </div>
            {alertHtml}

            <div className="s-content__primary">
              <div className="s-content__page-content">
                <div className="row block-large-1-2 block-tab-full s-content__blocks"></div>

                <fieldset>
                  <div className="form-field">
                    <input
                      name="cName"
                      type="text"
                      id="cName"
                      className="h-full-width h-remove-bottom"
                      placeholder="Your Name"
                      value={name}
                      onChange={handleName}
                    />
                  </div>

                  <div className="form-field">
                    <input
                      name="cEmail"
                      type="text"
                      id="cEmail"
                      className="h-full-width h-remove-bottom"
                      placeholder="Your Email"
                      value={email}
                      onChange={handleEmail}
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
                    >
                      {message}
                    </textarea>
                  </div>

                  <br />
                  <button
                    className="submit btn btn--primary h-full-width"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </fieldset>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

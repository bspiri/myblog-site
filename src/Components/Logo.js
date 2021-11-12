import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Logo() {
  const [logo, setLogo] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logo`)
      .then(function (response) {
        if (response.data.content.length > 0) {
          setLogo(<img src={response.data.content} alt="" />);
        } else {
          setLogo("");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="s-header__logo">
      <Link to="/" className="logo">
        {logo}
      </Link>
    </div>
  );
}

export default Logo;

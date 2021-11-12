import React, { Component } from "react";

class PageCounter extends Component {
  render() {
    return (
      <div className="row">
        <div className="column large-12">
          <nav className="pgn">
            <ul>
              <li>
                <span className="pgn__prev" href="#0">
                  Prev
                </span>
              </li>
              <li>
                <a className="pgn__num" href="#0">
                  1
                </a>
              </li>
              <li>
                <span className="pgn__num current">2</span>
              </li>
              <li>
                <a className="pgn__num" href="#0">
                  3
                </a>
              </li>
              <li>
                <a className="pgn__num" href="#0">
                  4
                </a>
              </li>
              <li>
                <a className="pgn__num" href="#0">
                  5
                </a>
              </li>
              <li>
                <span className="pgn__num dots">…</span>
              </li>
              <li>
                <a className="pgn__num" href="#0">
                  8
                </a>
              </li>
              <li>
                <span className="pgn__next" href="#0">
                  Next
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default PageCounter;

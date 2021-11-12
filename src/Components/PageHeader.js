import React from "react";

function PageHeader(props) {
  return (
    <section className="s-content">
      <div className="s-pageheader">
        <div className="row">
          <div className="column large-12">
            <h1 className="page-title">{props.title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;

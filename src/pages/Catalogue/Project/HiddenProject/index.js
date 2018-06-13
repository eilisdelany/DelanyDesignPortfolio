import React from "react";
import "../index.scss";

const HiddenProject = () => {
    return (
      <div className="HiddenProject">
      <span>{'Uhh oh, looks like you need to request access to view this project. '}</span>
      <span className="secondary-text">
        {'Drop me a '}
        <a href="mailto:delany.design@gmail.com">{'mail'}</a>
        {' if you can’t handle the suspense. '}
      </span>
      </div>
    );
}

export default HiddenProject;
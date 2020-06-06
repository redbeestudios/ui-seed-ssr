import React from "react";
import PropTypes from "prop-types";

import "./Skeleton.scss";

const Skeleton = ({ multiply }) => {
  return (
    <div className="skeleton">
      {Array(multiply)
        .fill()
        .map((it) => (
          <div key={`skeleton_${it}`} className="skeleton__content" />
        ))}
    </div>
  );
};

Skeleton.defaultProps = {
  multiply: 1,
};

Skeleton.propTypes = {
  multiply: PropTypes.number,
};

export default Skeleton;

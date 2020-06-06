import React from "react";
import PropTypes from "prop-types";

import "./Seed.scss";

const SeedCmp = ({ greeting }) => {
  return (
    <div className="seed">
      <div className="seed__content">
        <img
          className="seed__img"
          src="/static/redbee-logo.svg"
          alt="The redbee logo"
        />
        <span className="seed__title">redbee</span>
        <span className="seed__message">{greeting}</span>
      </div>
    </div>
  );
};

SeedCmp.propTypes = {
  greeting: PropTypes.string,
};

SeedCmp.defaultProps = {
  greeting: null,
};

export default SeedCmp;

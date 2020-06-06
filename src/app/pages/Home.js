import React from "react";
import PropTypes from "prop-types";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect } from "react-redux";
import { fetchGreeting } from "../redux/actions/ActionGreetings";

import SeedCmp from "../components/SeedCmp/SeedCmp";
import Skeleton from "../components/Skeleton";

import "./Home.scss";

const Home = ({ greetings }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Seed :: Home</title>
      </Helmet>
      <div className="home">
        {greetings ? (
          <a href="/list">
            <SeedCmp greeting={`Hola ${greetings.name}!`} />
          </a>
        ) : (
          <Skeleton />
        )}
      </div>
    </HelmetProvider>
  );
};

Home.serverFetch = fetchGreeting;

Home.propTypes = {
  greetings: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Home.defaultProps = {
  greetings: null,
};

const mapStateToProps = (state) => ({
  greetings: state.greetings,
});

export default connect(mapStateToProps, null)(Home);

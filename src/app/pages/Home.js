import React from 'react';
import PropTypes from 'prop-types';
import SeedCmp from './../components/SeedCmp/SeedCmp';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchGreeting } from './../redux/actions/ActionGreetings';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = ({greetings: {name}}) => {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Seed :: Home</title>
      </Helmet>
      <div className='home'>
        <Link to='/list'><SeedCmp greeting={`Hola ${name}!`}/></Link>
      </div>
    </HelmetProvider>
  )
};

Home.serverFetch = fetchGreeting;

Home.propTypes = {
  greetings: PropTypes.shape({
    name: PropTypes.string
  })
};

const mapStateToProps = state => ({
    greetings: state.greetings,
});

export default connect(
    mapStateToProps,
    undefined,
)(Home);

import React, { Component } from 'react';

import './Seed.scss'

const SeedCmp = ({greeting}) => {
    return (
        <div className='seed'>
          <div className='seed__content'>
            <img className='seed__img' src='/static/redbee-logo.svg' />
            <span className='seed__title'>redbee</span>
            <span className='seed__message'>{greeting}</span>
          </div>
        </div>
    );
}

export default SeedCmp;

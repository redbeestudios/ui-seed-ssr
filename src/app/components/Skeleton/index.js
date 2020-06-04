import React, { Component } from 'react';

import './Skeleton.scss';

const Skeleton = ({multiply = 1}) => {
    return (
        <div className='skeleton'>
          { Array(multiply).fill().map((_,key) => <div key={key} className='skeleton__content'></div>) }
        </div>
    );
}

export default Skeleton;

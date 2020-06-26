import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import promiseMiddleware from '../../services/PromiseMiddleware';


const middlewareBuilder = () => {

  let middleware = {};
  let universalMiddleware = [thunk, promiseMiddleware];
  let allComposeElements = [];

  middleware = applyMiddleware(...universalMiddleware);
  allComposeElements = [
    middleware,
  ];

  return allComposeElements;

};

const finalCreateStore = compose(...middlewareBuilder())(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
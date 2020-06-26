export default function promiseMiddleware() {
  return next => action => {
    const {promise, type, ...rest} = action;
    console.log("entre al pmw")
    if (!promise) return next(action);

    const SUCCESS = type + '_SUCCESS';
    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';
    console.log(`despacho ${REQUEST}`)
    next({...rest, type: REQUEST});
    return promise.then(response => {
      console.log(`volvio ${SUCCESS}`)
      next({...rest, response, type: SUCCESS});
      return true;
    }).catch(error => {
      next({...rest, error, type: FAILURE});

      return false;
    });
  };
}
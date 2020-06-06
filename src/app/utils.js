const getMessageError = (map, httpStatus, errorCode) => {
  if (map.has(Number(`${httpStatus}${errorCode}`))) {
    return map.get(Number(`${httpStatus}${errorCode}`));
  }
  return "Error";
};

export default getMessageError;

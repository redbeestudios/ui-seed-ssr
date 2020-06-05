import axios from 'axios';

const BASE_URL = `${process.env.APP_URL}:${process.env.APP_PORT}`;

export const setList = data => ({
  type: 'SET_LIST',
  data,
});

export const fetchList = () => (dispatch) => axios
    .get(`${BASE_URL}/api/list`)
    .then(response => dispatch(setList(response.data)));

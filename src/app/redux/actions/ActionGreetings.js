import axios from 'axios';

const BASE_URL = `${process.env.APP_URL}:${process.env.APP_PORT}`;

export const setGreeting = data => ({
  type: 'SET_GREETING',
  data,
});

export const fetchGreeting = () => (dispatch) => axios
    .get(`${BASE_URL}/api/greetings/me`)
    .then(response => dispatch(setGreeting(response.data)));

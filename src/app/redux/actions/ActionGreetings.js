import axios from 'axios';

export const setGreeting = data => ({
  type: 'SET_GREETING',
  data,
});

export const fetchGreeting = () => (dispatch) => axios
    .get('http://localhost:9000/api/greetings/me')
    .then(response => dispatch(setGreeting(response.data)));

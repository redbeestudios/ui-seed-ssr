import axios from 'axios';

const BASE_URL = `${process.env.APP_URL}:${process.env.APP_PORT}`;

export const getGreeting = ()=>{
  return axios
  .get(`${BASE_URL}/api/greetings/me`);
}
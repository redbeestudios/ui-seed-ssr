import {getGreeting} from '../../services/GreetingService';

export const GET_GREETING = "GET_GREETING";
export const GET_GREETING_REQUEST = "GET_GREETING_REQUEST";
export const GET_GREETING_SUCCESS = "GET_GREETING_SUCCESS";
export const GET_GREETING_FAILURE = "GET_GREETING";


export const setGreeting = (data) => ({
  type: "SET_GREETING",
  data,
});

export const fetchGreeting = () =>({
  type:GET_GREETING,
  promise:getGreeting()
});


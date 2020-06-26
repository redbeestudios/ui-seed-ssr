import {getList} from '../../services/ListService';

export const GET_LIST='GET_LIST';
export const GET_LIST_REQUEST='GET_LIST_REQUEST';
export const GET_LIST_SUCCESS='GET_LIST_SUCCESS';
export const GET_LIST_FAILURE='GET_LIST_FAILURE';



export const setList = (data) => ({
  type: "SET_LIST",
  data,
});

export const fetchList = () => ({
  type:GET_LIST,
  promise:getList()
})

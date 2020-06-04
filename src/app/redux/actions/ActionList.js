import axios from 'axios';

export const setList = data => ({
  type: 'SET_LIST',
  data,
});

export const fetchList = () => (dispatch) => axios
    .get('http://localhost:9000/api/list')
    .then(response => {
      console.log('fetch success')
      dispatch(setList(response.data))
    });

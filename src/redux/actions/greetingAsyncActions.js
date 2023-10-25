import axios from 'axios'; // Import Axios

import {
  fetchGreetingRequest,
  fetchGreetingSuccess,
  fetchGreetingFailure,
} from './greetingActions';

const fetchRandomGreeting = () => (dispatch) => {
  dispatch(fetchGreetingRequest());

  // Make an API request to fetch the random greeting using Axios
  axios.get('http://localhost:3001/api/greetings/random')
    .then((response) => {
      const greeting = response.data;
      dispatch(fetchGreetingSuccess(greeting));
    })
    .catch((error) => {
      dispatch(fetchGreetingFailure(error));
    });
};

export default fetchRandomGreeting;

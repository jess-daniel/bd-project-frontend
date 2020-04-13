import { useEffect } from 'react';
import axios from 'axios';
import { useStateValue } from 'react-conflux';

// local imports
import {
  START_FETCHING,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
} from '../reducers';

export const useFetch = (url, context) => {
  const [state, dispatch] = useStateValue(context);

  useEffect(() => {
    dispatch({ type: START_FETCHING, payload: true });
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        dispatch({ type: FETCHING_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: FETCHING_FAILURE, payload: err });
      });
  }, [url]);

  return [state];
};

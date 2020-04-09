import React, { useEffect } from 'react';
import { useStateValue } from 'react-conflux';
import axios from 'axios';

// local imports
import Loader from './Loader';
import MessageCard from './MessageCard';
import { messagesContext } from '../contexts';
import {
  START_FETCHING,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
} from '../reducers';

const Messages = () => {
  const [state, dispatch] = useStateValue(messagesContext);

  const FetchMessages = () => {
    dispatch({ type: START_FETCHING, payload: true });
    axios
      .get(process.env.REACT_APP_BASE_API)
      .then((res) => {
        console.log(res);
        dispatch({ type: FETCHING_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: FETCHING_FAILURE, payload: err });
      });
  };

  useEffect(() => {
    FetchMessages();
  }, []);

  if (state.isFetching === true) {
    return <Loader />;
  }

  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {state.messages.length === 0 ? (
        <p>There are no messages </p>
      ) : (
        state.messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))
      )}
    </section>
  );
};

export default Messages;

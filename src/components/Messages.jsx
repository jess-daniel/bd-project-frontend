import React from 'react';

// local imports
import Loader from './Loader';
import MessageCard from './MessageCard';
import { messagesContext } from '../contexts';
import { useFetch } from '../hooks/useFetch';

const Messages = () => {
  const [state] = useFetch(process.env.REACT_APP_BASE_API, messagesContext);

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

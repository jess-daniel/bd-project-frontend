import React from 'react';
import { Route } from 'react-router-dom';
import { StateProvider } from 'react-conflux';

// local imports
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Messages from './components/Messages';
import { messagesContext } from './contexts';
import { messagesReducer } from './reducers';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <NavBar />
      </Route>
      <Route exact path="/">
        <Hero />
      </Route>
      <StateProvider reducer={messagesReducer} stateContext={messagesContext}>
        <Route exact path="/">
          <Messages />
        </Route>
      </StateProvider>
      {/* main content - messages */}
      {/* Submit Message Form */}
    </div>
  );
}

export default App;

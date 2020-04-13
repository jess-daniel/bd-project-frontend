import React from 'react';
import { Route } from 'react-router-dom';
import { StateProvider } from 'react-conflux';

// local imports
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Messages from './components/Messages';
import AddMessage from './components/AddMessage';
import Footer from './components/Footer';
import { messagesContext } from './contexts';
import { messagesReducer } from './reducers';

// TODO: Bring in brand name from state after registration
const brand = {
  name: 'Message Thing',
};

function App() {
  return (
    <div className="App">
      <Route path="/">
        <NavBar brandName={brand.name} />
      </Route>
      <Route exact path="/">
        <Hero />
      </Route>
      <StateProvider reducer={messagesReducer} stateContext={messagesContext}>
        <Route exact path="/">
          <Messages />
        </Route>
        <Route exact path="/add-message">
          <AddMessage />
        </Route>
      </StateProvider>
      <Route path="/">
        <Footer brandName={brand.name} />
      </Route>
    </div>
  );
}

export default App;

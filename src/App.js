import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import CountryInput from './pages/CountryInput';
import CountryDetails from './pages/CountryDetails';

function App() {
  return (
    <div className="container">
      <Header />

      <main>
        <Switch>
          <Route path="/" exact>
            <CountryInput />
          </Route>

          <Route path="/:id" exact>
            <CountryDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

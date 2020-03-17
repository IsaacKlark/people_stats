import React from 'react';
import './styles/style.css';
import Home from './Home/Home';
import Users from './Users/Users';
import UserPage from './Users/UserPage';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/table" exact>
          <Users />
        </Route>
        <Route path="/user:id" exact>
          <UserPage />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;

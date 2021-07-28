import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import icon from '../assets/icon.svg';
import './App.global.css';
import SideContainer from './components/SideContainer';

const Hello = () => {
  return (
    <div>
      <SideContainer>
        <ul>
          <li>
            <div>Logo</div>
            <div>Fulano</div>
          </li>
        </ul>
      </SideContainer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import icon from '../assets/icon.svg';
import './App.global.css';
import SideContainer from './components/SideContainer';

const Hello = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <SideContainer>
        <ul>
          <li>
            <div>Logo</div>
            <div>Fulano</div>
          </li>
        </ul>
      </SideContainer>
      <div style={{ border: '2px solid #f00' }}>
        <h1>Teste</h1>
      </div>
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

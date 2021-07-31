import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import icon from '../assets/icon.svg';
import './App.global.css';
import HeaderChat from './components/HeaderChat';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

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
      <LeftContainer>
        <ul>
          <li>
            <div>Logo</div>
            <div>Fulano</div>
          </li>
        </ul>
      </LeftContainer>
      <RightContainer>
        <HeaderChat
          data={{
            photo: 'https://avatars.githubusercontent.com/u/33464352?s=400&v=4',
            fullname: 'Daniel Alves',
          }}
        />
        <div>
          <h3>dialog</h3>
        </div>
        <div>
          <h3>footer</h3>
        </div>
      </RightContainer>
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

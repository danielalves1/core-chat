import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import icon from '../assets/icon.svg';
import './App.global.scss';
import utils from './utils';
import HeaderChat from './components/HeaderChat';
import HeaderTitle from './components/HeaderTitle';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

const Hello = () => {
  return (
    <div className="app--container">
      <HeaderTitle />
      <div className="menu--bar">
        <span>File</span>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <LeftContainer>
          <div className="user">
            <div className="photo">
              <img
                src="https://pbs.twimg.com/profile_images/720270636434763777/dB0QdPId.jpg"
                alt=""
              />
            </div>
            <div className="info">
              <span className="name">Harvey Specter</span>
              <span className="status">TGA Sistemas</span>
            </div>
          </div>
          <ul className="list--contacts">
            {[
              {
                id: 1,
                name: 'Rachel Zane',
                message: 'TOTVS',
                photo: 'https://bit.ly/3A1QNN0',
                status: 0,
              },
              {
                id: 2,
                name: 'Charles Forstman',
                message: 'Puma Sistemas',
                photo: 'https://static.accessonline.com/uploads/211846.jpg',
                status: 1,
              },
              {
                id: 3,
                name: 'Donna Pausen',
                message: 'B&P',
                photo: 'https://bit.ly/2WJ8CSC',
                status: -1,
              },
              {
                id: 4,
                name: 'Jessica Pearson',
                message: 'Solução Sistemas',
                photo: 'https://bit.ly/3ii2Lw2',
                status: 2,
              },
            ].map((value) => (
              <button type="button" key={String(value.id)}>
                <li key={String(value.id)}>
                  <div className={`photo ${utils.parseStatus(value.status)}`}>
                    <img src={value.photo} alt={value.name} />
                  </div>
                  <div className="info">
                    <div className="name">{value.name}</div>
                    <div className="message">{value.message}</div>
                  </div>
                </li>
              </button>
            ))}
          </ul>
        </LeftContainer>
        <RightContainer>
          <HeaderChat
            data={{
              id: 1,
              name: 'Rachel Zane',
              message: 'TOTVS',
              photo: 'https://bit.ly/3A1QNN0',
              status: 0,
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

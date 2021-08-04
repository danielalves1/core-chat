import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import icon from '../assets/icon.svg';
import { Search } from '@material-ui/icons';
import './App.global.scss';
import HeaderChat from './components/HeaderChat';
import HeaderTitle from './components/HeaderTitle';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import utils from './utils';

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
          <div className="search">
            <div className="input--adornment">
              <Search className="icon" />
              <input placeholder="Search contact" type="text" />
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
          <div className="dialog">
            <div className="received">
              <span className="message">
                How the hell am I supposed to get a jury to believe you when I
                am not even sure that I do?!
              </span>
            </div>
            <div className="sent">
              <span className="message">
                When you're backed against the wall, break the god damn thing
                down.
              </span>
            </div>
            <div className="sent">
              <div className="content">
                <span className="message">
                  Excuses don't win championships.
                </span>
                <span className="message--info">
                  23:59
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 15"
                    width="16"
                    height="15"
                  >
                    <path
                      fill="currentColor"
                      d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                    />
                  </svg>
                </span>
              </div>
              <div className="photo">
                <span>FOTO</span>
              </div>
            </div>
            <div className="received">
              <span className="message">
                Oh yeah, did Michael Jordan tell you that?
              </span>
            </div>
          </div>
          <div className="input--message">
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

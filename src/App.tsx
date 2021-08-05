import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import icon from '../assets/icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { Resizable } from 'react-resizable';
import { DoneAll, Search } from '@material-ui/icons';
import './App.global.scss';
import HeaderChat from './components/HeaderChat';
import HeaderTitle from './components/HeaderTitle';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import utils from './utils';

const Hello = () => {
  library.add(fab);
  const [state, setState] = useState({ height: 60 });
  const onResize = (e: React.SyntheticEvent<Element, Event>, { size }: any) => {
    setState({ height: size.height });
    return e;
  };
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
              <div className="content">
                <span className="message">
                  How the hell am I supposed to get a jury to believe you when I
                  am not even sure that I do?!
                </span>
                <span className="message--info">
                  23:59
                  <DoneAll className="deliver" />
                </span>
              </div>
            </div>
            <div className="sent">
              <div className="content">
                <span className="message--info">
                  23:59
                  <DoneAll className="deliver" />
                </span>
                <span className="message">
                  When you're backed against the wall, break the god damn thing
                  down.
                </span>
              </div>
            </div>
            <div className="sent">
              <div className="content">
                <span className="message--info">
                  23:59
                  <DoneAll className="deliver" />
                </span>
                <span className="message">
                  Excuses don't win championships.
                </span>
              </div>
            </div>
            <div className="received">
              <div className="content">
                <span className="message">
                  Oh yeah, did Michael Jordan tell you that?
                </span>
                <span className="message--info">
                  23:59
                  <DoneAll className="deliver" />
                </span>
              </div>
            </div>
          </div>
          <Resizable
            minConstraints={[60, 60]}
            maxConstraints={[300, 300]}
            height={state.height}
            axis="y"
            width={state.height}
            onResize={onResize}
            resizeHandles={['n']}
          >
            <div className="footer" style={{ height: `${state.height}px` }}>
              <div className="input">
                <textarea autoFocus />
              </div>
              <div className="options">
                <button type="button">
                  <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
                </button>
              </div>
            </div>
          </Resizable>
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

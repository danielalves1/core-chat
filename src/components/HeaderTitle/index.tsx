import React from 'react';

import { remote } from 'electron';

const HeaderTitle = () => {
  const getWindow = () => {
    return remote.getCurrentWindow();
  };

  const handleMinimizeWindow = () => {
    getWindow()?.minimize();
  };
  const handleMaximizeWindow = () => {
    const w = getWindow();
    if (w?.isMaximized()) {
      w.unmaximize();
    } else {
      w?.maximize();
    }
  };
  const handleCloseWindow = () => {
    const w = remote.getCurrentWindow();
    w.close();
  };
  return (
    <div className="title--bar">
      <div className="left">
        <svg className="menu--icon" viewBox="0 0 100 80" width="40" height="40">
          <rect width="95" rx="10" height="12" />
          <rect y="30" rx="10" width="95" height="12" />
          <rect y="60" rx="10" width="95" height="12" />
        </svg>
        <div className="title">Chat</div>
      </div>
      <div className="right">
        <button
          type="button"
          onClick={handleMinimizeWindow}
          className="window-btn"
        >
          _
        </button>
        <button
          type="button"
          onClick={handleMaximizeWindow}
          className="window-btn"
        >
          □
        </button>
        <button
          type="button"
          onClick={handleCloseWindow}
          className="window-btn"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default HeaderTitle;

import React from 'react';

const HeaderTitle = () => {
  return (
    <div className="title--bar">
      <div className="left">
        <span>Chat</span>
      </div>
      <div className="right">
        <button type="button" className="window-btn">
          _
        </button>
        <button type="button" className="window-btn">
          □
        </button>
        <button type="button" className="window-btn">
          x
        </button>
      </div>
    </div>
  );
};

export default HeaderTitle;

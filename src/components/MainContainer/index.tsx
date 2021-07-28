import React from 'react';

import './style.css';

export interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = (props: MainContainerProps) => {
  const { children } = props;
  return <div className="main--container">{children}</div>;
};

export default MainContainer;

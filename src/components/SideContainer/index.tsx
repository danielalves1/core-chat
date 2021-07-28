import React from 'react';

import './style.css';

export interface SideContainerProps {
  children: React.ReactNode;
}

const SideContainer = (props: SideContainerProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default SideContainer;

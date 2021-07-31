/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export interface SideContainerProps {
  children: React.ReactNode;
}

const SideContainer = (props: SideContainerProps) => {
  const { children } = props;
  return <div className="left--container">{children}</div>;
};

export default SideContainer;

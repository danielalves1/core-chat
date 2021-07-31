import React from 'react';

export interface MainContainerProps {
  children: React.ReactNode;
}

const RightContainer = (props: MainContainerProps) => {
  const { children } = props;
  return <div className="right--container">{children}</div>;
};

export default RightContainer;

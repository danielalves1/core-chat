/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import './style.css';
import { Resizable } from 'react-resizable';

export interface SideContainerProps {
  children: React.ReactNode;
}

const SideContainer = (props: SideContainerProps) => {
  const [state, setState] = useState({ width: 200 });
  const onResize = (e: React.SyntheticEvent<Element, Event>, { size }: any) => {
    setState({ width: size.width });
    return e;
  };
  const { children } = props;
  return (
    <Resizable
      minConstraints={[60, 100]}
      height={100}
      axis="x"
      width={state.width}
      onResize={onResize}
    >
      <div
        className="box"
        style={{
          width: `${state.width}px`,
          background: '#2c3e50',
        }}
      >
        {children}
      </div>
    </Resizable>
    // <Resizable width={size.width} height={size.height} onResize={onResize}>
    //   <div>{children}</div>
    // </Resizable>
  );
};

export default SideContainer;

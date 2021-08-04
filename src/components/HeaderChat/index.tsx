import React from 'react';
import utils from '../../utils';

export interface MainContainerProps {
  data: Record<string, any>;
}

const HeaderChat = (props: MainContainerProps) => {
  const { data } = props;
  return (
    <div className="hc--container">
      <img
        className={`hc--profile-photo ${utils.parseStatus(data.status)}`}
        src={data.photo}
        alt={data.name || ''}
      />
      <div className="hc--info">
        <span className="name">{data?.name}</span>
        <span className="message">{data?.message}</span>
      </div>
    </div>
  );
};

export default HeaderChat;

import React from 'react';

export interface MainContainerProps {
  data: Record<string, string>;
}

const HeaderChat = (props: MainContainerProps) => {
  const { data } = props;
  return (
    <div className="hc--container">
      <img
        className="hc--profile-photo"
        src={data.photo}
        alt={data.fullname || ''}
      />
      <span>Fulano de Tal</span>
    </div>
  );
};

export default HeaderChat;

import React from 'react';
import { cx } from '@emotion/css';
import { useChat } from './chat.hooks';
import * as classes from './component.styles';

export const Chat: React.FC = (props) => {
  const [message, setMessage] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const { chatlog, isConnected, onJoin, onSendMessage } = useChat(nickname);

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className={classes.root}>
      <Nickname
        nickname={nickname}
        isConnected={isConnected}
        onChange={setNickname}
        onJoin={onJoin}
      />
      {isConnected && (
        <>
          <div className={classes.form}>
            <label>Message</label>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
          <div className={cx(classes.form, classes.chatlog)}>
            <label>ChatLog</label>
            <textarea className={classes.chatlog} value={chatlog} readOnly />
          </div>
        </>
      )}
    </div>
  );
};

interface NicknameProps {
  nickname: string;
  isConnected: boolean;
  onChange: (nickname: string) => void;
  onJoin: () => void;
}

const Nickname: React.FC<NicknameProps> = (props) => {
  const { nickname, isConnected, onChange, onJoin } = props;
  return (
    <>
      {isConnected ? (
        <label>
          Nickname: <strong>{nickname}</strong>
        </label>
      ) : (
        <div className={classes.form}>
          <label>Nickname</label>
          <input value={nickname} onChange={(e) => onChange(e.target.value)} />
          <button onClick={onJoin}>Join</button>
        </div>
      )}
    </>
  );
};

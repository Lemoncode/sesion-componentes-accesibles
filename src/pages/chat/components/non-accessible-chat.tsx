import React from 'react';
import { useChat } from '../chat.hooks';
import * as classes from './non-accessible-chat.styles';

export const NonAccessibleChat: React.FC = (props) => {
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
          <div className={classes.fieldContainer}>
            <label>Message</label>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
          <div className={classes.chatlog}>
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
        <div className={classes.fieldContainer}>
          <label>Nickname</label>
          <input value={nickname} onChange={(e) => onChange(e.target.value)} />
          <button onClick={onJoin}>Join</button>
        </div>
      )}
    </>
  );
};

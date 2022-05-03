import React from 'react';
import { useChat } from '../chat.hooks';
import * as classes from './accessible-chat.styles';

export const AccessibleChat: React.FC = (props) => {
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
          <form
            className={classes.fieldContainer}
            onSubmit={(event) => {
              event.preventDefault();
              handleSendMessage();
            }}
            aria-labelledby="send-message"
          >
            <fieldset>
              <legend className={classes.screenReaderOnly} id="send-message">
                Enviar mensaje
              </legend>
              <label htmlFor="message">Mensaje</label>
              <input
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Enviar</button>
            </fieldset>
          </form>
          <div className={classes.chatlog} role="log">
            <ul>
              {chatlog.map((message) => (
                <li>{message}</li>
              ))}
            </ul>
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
          Alias: <strong>{nickname}</strong>
        </label>
      ) : (
        <form
          className={classes.fieldContainer}
          onSubmit={(event) => {
            event.preventDefault();
            onJoin();
          }}
          aria-labelledby="choose-nickname"
        >
          <fieldset>
            <legend className={classes.screenReaderOnly} id="choose-nickname">
              Elige tu alias
            </legend>
            <label htmlFor="nickname">Alias</label>
            <input
              id="nickname"
              value={nickname}
              required
              onChange={(e) => onChange(e.target.value)}
            />
            <button type="submit">¡A ligar!</button>
          </fieldset>
        </form>
      )}
    </>
  );
};

# Chat

Tanto la parte de elegir el nombre de usuario como la parte de enviar un mensaje, deberían de ser formularios para identificar mejor dichas regiones:

_./src/component.tsx_

```diff
...
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
-         <div className={classes.fieldContainer}>
+         <form
+           className={classes.fieldContainer}
+           onSubmit={(event) => {
+             event.preventDefault();
+             handleSendMessage();
+           }}
+         >
            <label>Message</label>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
-           <button onClick={handleSendMessage}>Send</button>
+           <button type="submit">Send</button>
-         </div>
+         </form>
          <div className={classes.chatlog}>
            <label>ChatLog</label>
            <textarea className={classes.chatlog} value={chatlog} readOnly />
          </div>
        </>
      )}
    </div>
  );
};

...

const Nickname: React.FC<NicknameProps> = (props) => {
  const { nickname, isConnected, onChange, onJoin } = props;
  return (
    <>
      {isConnected ? (
        <label>
          Nickname: <strong>{nickname}</strong>
        </label>
      ) : (
-       <div className={classes.fieldContainer}>
+       <form
+         className={classes.fieldContainer}
+         onSubmit={(event) => {
+           event.preventDefault();
+           onJoin();
+         }}
+       >
          <label>Nickname</label>
          <input value={nickname} onChange={(e) => onChange(e.target.value)} />
-         <button onClick={onJoin}>Join</button>
+         <button type="submit">Join</button>
-       </div>
+       </form>
      )}
    </>
  );
};
```

Además, podríamos utilizar `fieldset` y `legend` para contextualizar dichos formularios:

_./src/component.tsx_

```diff
...
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
          <form
            className={classes.fieldContainer}
            onSubmit={(event) => {
              event.preventDefault();
              handleSendMessage();
            }}
+           aria-labelledby="send-message"
          >
+           <fieldset>
+             <legend id="send-message">Send message</legend>
              <label>Message</label>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
+           </fieldset>
          </form>
          <div className={classes.chatlog}>
            <label>ChatLog</label>
            <textarea className={classes.chatlog} value={chatlog} readOnly />
          </div>
        </>
      )}
    </div>
  );
};

...

const Nickname: React.FC<NicknameProps> = (props) => {
  const { nickname, isConnected, onChange, onJoin } = props;
  return (
    <>
      {isConnected ? (
        <label>
          Nickname: <strong>{nickname}</strong>
        </label>
      ) : (
-       <form className={classes.fieldContainer} onSubmit={onJoin}>
        <form
          className={classes.fieldContainer}
          onSubmit={(event) => {
            event.preventDefault();
            onJoin();
          }}
+         aria-labelledby="choose-nickname"
        >
+         <fieldset>
+           <legend id="choose-nickname">Choose nickname</legend>
            <label>Nickname</label>
            <input
              value={nickname}
              onChange={(e) => onChange(e.target.value)}
            />
            <button type="submit">Join</button>
+         </fieldset>
        </form>
      )}
    </>
  );
};
```

Para que lo anterior no afecte visualmente, podemos ocultarlo y que solamente esté disponible para los `screen readers`:

_./src/component.styles.ts_

```diff
import { css } from '@emotion/css';

+ export const screenReaderOnly = css`
+   position: absolute;
+   left: -10000px;
+   top: auto;
+   width: 1px;
+   height: 1px;
+   overflow: hidden;
+ `;

export const root = css`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 1rem;
`;

export const fieldContainer = css`
+   fieldset {
+     border: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
+   }
...
```

_./src/component.tsx_

```diff
...
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
          <form
            className={classes.fieldContainer}
            onSubmit={(event) => {
              event.preventDefault();
              handleSendMessage();
            }}
            aria-labelledby="send-message"
          >
            <fieldset>
-             <legend id="send-message">Send message</legend>
+             <legend className={classes.screenReaderOnly} id="send-message">
+               Send message
+             </legend>
              <label>Message</label>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </fieldset>
          </form>
          <div className={classes.chatlog}>
            <label>ChatLog</label>
            <textarea className={classes.chatlog} value={chatlog} readOnly />
          </div>
        </>
      )}
    </div>
  );
};
...

const Nickname: React.FC<NicknameProps> = (props) => {
  const { nickname, isConnected, onChange, onJoin } = props;
  return (
    <>
      {isConnected ? (
        <label>
          Nickname: <strong>{nickname}</strong>
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
-           <legend id="choose-nickname">Choose nickname</legend>
+           <legend className={classes.screenReaderOnly} id="choose-nickname">Choose nickname</legend>
            <label>Nickname</label>
            <input
              value={nickname}
              onChange={(e) => onChange(e.target.value)}
            />
            <button type="submit">Join</button>
          </fieldset>
        </form>
      )}
    </>
  );
};
```

Incluso debemos asociar el elemento `label` con el `input` para que sepamos que estan relacionados:

_./src/component.tsx_

```diff
...
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
                Send message
              </legend>
-             <label>Message</label>
+             <label htmlFor="message">Message</label>
              <input
+               id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </fieldset>
          </form>
          <div className={classes.chatlog}>
            <label>ChatLog</label>
            <textarea className={classes.chatlog} value={chatlog} readOnly />
          </div>
        </>
      )}
    </div>
  );
};

...

const Nickname: React.FC<NicknameProps> = (props) => {
  const { nickname, isConnected, onChange, onJoin } = props;
  return (
    <>
      {isConnected ? (
        <label>
          Nickname: <strong>{nickname}</strong>
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
            <legend className={classes.screenReaderOnly} id="choose-nickname">Choose nickname</legend>
-           <label>Nickname</label>
+           <label htmlFor="nickname">Nickname</label>
            <input
+             id="nickname"
              value={nickname}
              onChange={(e) => onChange(e.target.value)}
            />
            <button type="submit">Join</button>
          </fieldset>
        </form>
      )}
    </>
  );
};
```

Por último, utilizaremos el `role="log"` en el chatlog, así nos avisará cuando recibamos un nuevo mensaje:


_./src/component.tsx_

```diff
...
-         <div className={classes.chatlog}>
+         <div className={classes.chatlog} role="log">
-           <label>ChatLog</label>
+           <label htmlFor="chatlog">ChatLog</label>
            <textarea
+             id="chatlog"
              className={classes.chatlog}
              value={chatlog}
              readOnly
            />
          </div>
...

```

## References

[WAI_ARIA - Form](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/form.html)

[MDN - Hiding content](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#hiding_content)

[MDN - WAI_ARIA - Log role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role)

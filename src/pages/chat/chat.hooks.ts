import React from 'react';
import { Socket } from 'socket.io-client';
import { joinChat } from './chat.api';

export const useChat = (nickname: string) => {
  const [socket, setSocket] = React.useState<Socket>(null);
  const [isConnected, setIsConnected] = React.useState(false);
  const [chatlog, setChatlog] = React.useState([]);

  const establishConnection = () => {
    const chatConnection = joinChat(nickname);
    setSocket(chatConnection);
    chatConnection.on('message', (body) => {
      if (body && body.type) {
        switch (body.type) {
          case 'CONNECTION_SUCCEEDED':
            setIsConnected(true);
            console.log('Connection succeded');
            break;
          case 'CHAT_MESSAGE':
            setChatlog(
              (chatlog) =>
                [...chatlog, `[${body.payload.nickname}]: ${body.payload.message}`]
            );
            break;
        }
      }
    });
  };

  const onJoin = () => {
    if (!isConnected) {
      establishConnection();
    }
  };

  const onSendMessage = (message: string) => {
    setChatlog(chatlog => [...chatlog, `[${nickname}]: ${message}` ]);
    socket.emit('message', {
      type: 'CHAT_MESSAGE',
      payload: { message },
    });
  };

  return {
    isConnected,
    chatlog,
    onJoin,
    onSendMessage,
  };
};

import { io, Socket } from 'socket.io-client';

export const url = '/chat';

export const joinChat = (nickname: string): Socket =>
  io({
    query: { nickname },
    path: '/chat',
    timeout: 60000,
  });

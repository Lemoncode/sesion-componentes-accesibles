import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { envConstants } from './env.constants';
import { addUserSession, ConnectionConfig, getNickname } from './store';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  path: '/chat'
});

io.on('connection', (socket: Socket) => {
  console.log('** connection recieved');
  const config: ConnectionConfig = {
    nickname: socket.handshake.query['nickname'] as string,
  };
  addUserSession(socket.id, config);

  socket.emit('message', { type: 'CONNECTION_SUCCEEDED' });

  socket.on('message', function (body: any) {
    console.log(body);
    socket.broadcast.emit('message', {
      ...body,
      payload: {
        ...body.payload,
        nickname: getNickname(socket.id),
      },
    });
  });
});

httpServer.listen(envConstants.PORT, () => {
  console.log(`Server ready at http://localhost:${envConstants.PORT}`);
});

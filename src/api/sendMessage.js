import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_URL)

const api = {
    sendMessage: (message) => {
      socket.emit('chat message', message);
    },
    onMessageReceived: (callback) => {
      socket.on('chat message', (message) => {
        callback(message);
      });
    },
  };
  
  export default api;
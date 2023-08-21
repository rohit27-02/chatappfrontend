import socket from "../middleware/socket";

const api = {
  sendPrivateMessage: ({ message, userID }) => {
    socket.emit("private message", {
      content: message,
      to: userID,
    })
  },
  sendMessage: ({ message, token }) => {
    socket.emit('chat message', { message: message, token: token });
  },
  onMessageReceived: (callback) => {
    socket.on('chat message', (message) => {
      callback(message);
    });
  },
};

export default api;
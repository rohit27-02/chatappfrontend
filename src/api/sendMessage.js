import socket from "../middleware/socket";

const api = {
  sendPrivateMessage: ({ message, userId }) => {
    socket.emit("private message", {
      content: message,
      to: userId,
    });
  },
  sendMessage: ({ message, token }) => {
    socket.emit('chat message', { message: message, token: token });
  },
  onMessageReceived: (callback) => {
    socket.on("private message", (message) => {
      callback(message);
    });
  },
};

export default api;

import { io } from "socket.io-client";

const url = process.env.REACT_APP_URL;
const socket = io(url,{autoConnect: false});

socket.onAny((event, ...args) => {
    console.log(event, args);
  });

export default socket;
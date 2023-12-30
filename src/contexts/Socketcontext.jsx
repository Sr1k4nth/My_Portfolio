import React from "react";
import socketio from "socket.io-client";
const baseUrl = "https://jsonplaceholder.typicode.com/";

 export const socket = socketio.connect(baseUrl);
export const SocketContext = React.createContext();

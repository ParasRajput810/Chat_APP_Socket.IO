const express = require("express");
const {PORT} = require("./config/serverConfig");
const httpserver = require("http");
const app = express();
const server = httpserver.createServer(app);

const socketio = require("socket.io");
const io = socketio(server);
const path = require("path");

const serverStartUp = async()=>{
    
    app.use('/',express.static(path.join(__dirname , "./public")));

    io.on("connection", (socket) => { 
        console.log("User Created ...");
        socket.on("from_client" , (arg)=>{
            socket.emit("hello" , arg);
        })
    });

    server.listen(PORT , ()=>{
        console.log("Server Started At" , PORT);
    })
}

serverStartUp();
const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require('socket.io');
const app = express();
const PORT = 4002;
const server = http.createServer(app);

const io = new Server(server);
app.use(express.static(path.resolve("./Public")));
app.get("/",(req,res)=>{
   return res.sendFile("./Public/index.html");
});

io.on('connection', (socket) => {
    socket.on("your-message",(message)=>{
      io.emit("message",message);
    })
  });
  

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
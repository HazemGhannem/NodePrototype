const app = require('./app')
const http = require('http')

const port = 5000;

const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", function(socket) {
    console.log ("User Connected..");
    socket.emit("msg","a new user is connected")
    socket.on('disconnect', () => {
        console.log('user disconnected');
        io.emit("msg","user is disconnected")
      });
    socket.on("msg",(d)=>{
        console.log(d)
        io.emit("msg", d);
    })
    });


    // err handler


server.listen(port,() => console.log(`Server started on port ${port}`));
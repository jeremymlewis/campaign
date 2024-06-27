const express = require('express');
const fs = require('fs');
const { createServer } = require('node:https');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
var options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/windriveradmin.info/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/windriveradmin.info/privkey.pem')
}

const server = createServer(options, app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

var activeGames = [];

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  console.log('a user connected');
  let previousId;
  io.emit("conn", `${socket.id} has joined the connection`)

  function safeJoin(currentId) {
    console.log("safeJoin")
    if (previousId) {
      socket.leave(previousId);
    }
    // if (activeGames.includes(previousId)) {
    //   const index = myArray.indexOf(previousId);
    //   activeGames = myArray.splice(index, 1);
    // }
    socket.join(currentId);
    console.log("join attemped")
    previousId = currentId;
  };

  socket.on("final", (gameId) => {
    io.to(gameId).emit("final", `final`);
  });


  socket.on("createGame", (gameId) => {
    console.log("create request")
    safeJoin(gameId);
    activeGames.push(gameId);
    io.to(gameId).emit("createSuccess", `${socket.id} created game ${gameId}`);
    console.log(`${socket.id} created game ${gameId}`)
  });

  socket.on("joinGame", (gameId) => {
    console.log(`join request ${gameId}`)
    if (activeGames.includes(gameId)) {
      safeJoin(gameId);
      io.to(gameId).emit("joinSuccess", gameId);
      console.log(`${socket.id} joined game ${gameId}`)
    } else {

      io.emit("joinFailure", gameId);
      //return something so they know this game id is invalid.
    }
  });

  socket.on("hostMove", (connectionId, type, states, change) => {
    io.to(connectionId).emit('hostMove', {type, states, change});
  });

  socket.on("guestMove", (connectionId, type, states, change) => {
    io.to(connectionId).emit('guestMove', {type, states, change});
  });

  socket.on("hostSpecial", (connectionId, type, states, change)  => {
    console.log("hostSpecial")
    io.to(connectionId).emit('hostSpecial', {type, states, change}) ;
  });

  socket.on("guestSpecial", (connectionId, type, states, change)  => {
    console.log("guestSpecial")
    io.to(connectionId).emit('guestSpecial', {type, states, change}) ;
  });

  socket.on("error", () => {
    console.log("Error was detected...");
  });

  socket.on("hostPartySelect", (connectionId, arg) => {
    io.to(connectionId).emit('partySelect', arg);
  })

  socket.on('leave', (connectionId) => {
    socket.leave(connectionId);
    io.to(connectionId).emit('partnerLeft', "partner has disconnected");
//    if (activeGames.includes(previousId)) {
//      const index = activeGames.indexOf(previousId);
//      activeGames = activeGames.splice(index, 1);
//    }
//    console.log(activeGames);
  })

  socket.on('disconnect', () => {
    //delete the games they were a part of
    //remove the connectionID via leave as well?
    console.log('user disconnected');
  });
});


server.listen(3000, () => {
  console.log('server running on port 3000');
});

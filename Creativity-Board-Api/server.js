const express = require('express');
      logger = require('morgan');
      bodyParser = require('body-parser');
      http = require('http');
      config = require('./config');
      socketIo = require("socket.io");
      boards = require('./controllers/boards');
      users = require('./controllers/users');
      section = require('./controllers/section');
      db = require('./db');
      app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/board', boards);
app.use('/api/user', users);
app.use('/api/section', section);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
console.log(app.get('env'));
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



port = config.port;
server = http.createServer(app);
io = socketIo(server);
server.listen(port);
io.on('connect', function (socket) {
  console.log('Client connected');
  socket.on('message', function (m) {
      console.log('[server](message): %s', JSON.stringify(m));
      io.emit('message', m);
  });
  socket.on('disconnect', function () {
      console.log('Client disconnected');
  });
});
console.log("listening on port "+port);
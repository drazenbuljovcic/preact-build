const express = require('express'),
  path = require('path'),
  http = require('http'),
  app = express(),
  server = http.createServer(app),
  compression = require('compression'),
  port = process.env.PORT || 3000;

if(process.env.NODE_ENV === "production") {
  app.use(compression());
}

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('**', function(req, res) {
  res.sendFile('index.html', {
    root: path.resolve(__dirname, '../public')
  });
});

server.listen(port, function(err) {
  if(err) console.log(err);

  console.log('Server running on port ', port);
});

//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
var server = app.listen(process.env.PORT || 8080);
console.log('Servidor Express iniciado na porta %s', server.address().port);

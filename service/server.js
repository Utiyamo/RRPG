const express = require('express'),
app = express(),
port = process.env.PORT || 3001;

const mongoose = require('mongoose'),
bodyParser = require('body-parser'),
routes = require('./src/routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://DanielUtiyama:a1b2c3d4e5@dcclustersp-exlfo.gcp.mongodb.net/Web', { useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extendes: true}));
app.use(bodyParser.json());

routes(app);

app.listen(port);
console.log(`WebService RRPG stated on: ${port}`);
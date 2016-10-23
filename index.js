// App Goes Here
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

/***********
    Routes
************/
var router = express.Router();
// Time Stuff
var time = require('./controllers/time.js');
app.get('/api/v1/time/eventTimeRemaining', time.timeRemaining);
app.get('/api/v1/time/eventStatus', time.status);
app.post('/api/v1/time/setEventTime', time.set);
app.post('/api/v1/time/pauseEvent', time.pause);

// Team Stuff
var team = require('./controllers/team.js');
app.get('/api/v1/team/:id', team.getOne);
app.get('/api/v1/team/ranks', team.getAll);
app.post('/api/v1/team/addTeam', team.add);
app.post('/api/v1/team/:id/addMember', team.addMember);
app.delete('/api/v1/team/remove/:id', team.remove);
app.delete('/api/v1/team/:id/removeMember', team.removeMember);
app.put('/api/v1/team/:id/updateChallenge', team.updateChallenge);

// Challenge Stuff
var challenge = require('./controllers/challenge.js');
app.get('/api/v1/challenge/', challenge.getAll);
app.get('/api/v1/challenge/:id', challenge.getOne);
app.put('/api/v1/challenge/:id', challenge.update);
app.post('/api/v1/challenge/add', challenge.add);
app.delete('/api/v1/challenge/:id', challenge.remove);

app.set('port', port);

// Sets up client app
app.use(express.static(__dirname + '/client'));

var server = app.listen(app.get('port'), function() {
    console.log("Listening on port " + server.address().port);
});

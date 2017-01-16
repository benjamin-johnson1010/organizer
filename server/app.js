var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var connectionString = 'postgress://localhost:5432/tasks';
var urlencodedParser = bodyParser.urlencoded( {extended: false } );
app.use(bodyParser.json);

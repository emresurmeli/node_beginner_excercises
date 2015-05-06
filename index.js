'use strict';

var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');
var fileRequestHandlers = require('./file_requestHandler.js');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

var handle_files = {};
handle['/'] = fileRequestHandlers.start;
handle['/start'] = fileRequestHandlers.start;
handle['/upload'] = fileRequestHandlers.upload;

server.start(router.route, handle);
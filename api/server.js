const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const errHandler = require('./errHandler.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger);

server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
	res.res(200).json({ api: 'Server is running!' });
});

function logger(req, res, next) {
	console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('host')}`);
	next();
}

server.use(errHandler);

module.exports = server;

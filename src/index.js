import express from 'express';
import http from 'http';
import path from 'path';
import apiRouter from './routes/api';
import Configurations from './config/configurations';

const app = express();
// set up ejs for templating. You can use whatever
// app.use(express.static('../../public'));
// Initialize servers
const httpPort = 3005;
const httpServer = http.createServer(app);

// const src_dir = path.join(__dirname, '../../index.html');
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));
app.use('/api/', apiRouter);

Configurations.loadConfigurations();

httpServer.listen(httpPort);

console.log(`Server http starting on port: ${httpPort}`);

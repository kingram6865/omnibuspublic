import 'dotenv/config';
import path from 'path';
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import * as conColor from './utilities/consoleColors';
import { appLogger } from './utilities/logging';

import { nttRoutes } from './routes/ntt';
import { ytubeRoutes } from './routes/ytube';
import { chanceryRoutes } from './routes/chancery';
import { lawRoutes } from './routes/law'

const PORT = process.env.PORT || 3019;
const SERVER = process.env.HOST || 'localhost';
const TIME = new Date();

const myLogger = appLogger(__dirname)
const accessLogStream = fs.createWriteStream(path.join(__dirname, `/logs/access.log`), { flags: 'a' })

const app = express();
app.use(cors());

/* dev, combined or common */
app.use(morgan('common', { stream: accessLogStream }))
app.use(express.static(__dirname + '/static', { dotfiles: 'allow' }))

app.use(express.json());

/* Set up html templating */
app.engine('.html', require('pug').__express);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.use(express.static('/SABRENT/disk2/00.BACKUPS/NTT/NTT/'))


app.get('/', (req, res) => {
  res.render('root', {})
})

app.get('/favicon.ico', (req, res) => res.status(204).end());


// Add all the routes to the Express server exported from routes/{object model}/index.js
nttRoutes.forEach(route => {
    // console.log(`app[${route.method}](${route.path}, ${route.handler})`)
    app[route.method](route.path, route.handler);
});

ytubeRoutes.forEach(route => {
  app[route.method](route.path, route.handler);
})

chanceryRoutes.forEach(route => {
  // console.log('---> 56: ', route)
  // console.log(`--- Line 57: app[${route.method}](${route.path}, ${route.handler})`)
  app[route.method](route.path, route.handler);
})

lawRoutes.forEach(route => {
  app[route.method](route.path, route.handler);
})


// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

if (process.env.HOST === 'localhost') {
  let httpsMessage = `${conColor.brightBlue}Consolidated(Omnibus) API Secure Server Started${conColor.Reset} [IP: ${conColor.brightYellow}${SERVER}${conColor.Reset}, PORT: ${conColor.brightYellow}${PORT}${conColor.Reset}, start time: (${conColor.brightGreen}${TIME.toLocaleString()}${conColor.Reset}])`
  sslServer.listen(process.argv.SSLPORT, process.env.HOST, () => myLogger.log(httpsMessage))
} else {
  let httpMessage = `${conColor.brightBlue}Consolidated(Omnibus) API Server Started${conColor.Reset} IP: ${conColor.brightYellow}${SERVER}${conColor.Reset}, PORT: ${conColor.brightYellow}${PORT}${conColor.Reset}, start time: (${conColor.brightGreen}${TIME.toLocaleString()}${conColor.Reset}])`
  app.listen(PORT, process.env.HOST, () => myLogger.log(httpMessage))
}
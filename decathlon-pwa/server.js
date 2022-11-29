import { handler } from './build/handler.js';
import express from 'express';
import http from 'http';
import https from 'https';
import fs from 'fs';
import cors from 'cors';
import webpush from 'web-push';
import bodyParser from 'body-parser';

import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'


// File path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Read data from JSON file, this will set db.data content
await db.read()

// Set some defaults
if(db.data === null){
  db.data = { subscriptions: [] };
  db.write();
  console.log("db.json created");
}
// Create a service (the app object is just a callback).
var app = express();

app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

const publicVapidKey = 'BAYcVFHJQDtc1W2Tqdqv5P8K6IX6T86iXmx63bxeoBCdYHTHM49aRsEMhth34WVjuJv_JFP3ASgeACpQV9xTNK8';
const privateVapidKey = 'YOg6C-MJlwpaVo-a0Wo25777KY1iNFdB0079nyAUxKs';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);
/*
//Subscribe Route
app.post('/subscribe', (req, res) => {
  //Get pushSubscription object
  console.log(typeof db.data.subscriptions)
  const subscription = db.data.subscriptions.find(endpoint => endpoint === req.body.endpoint);
  //Send 201 - resource created
  res.status(201).json({});

  //Create payload
  const payload = JSON.stringify({ title: 'Push Test' });

  //Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});

app.post("/register", async function (req, res) {
  // A real world application would store the subscription info.
  console.log(`Subscribing ${req.body.endpoint}`);
  if(!db.data.subscriptions.includes(req.body)){
    db.data.subscriptions.push(req.body)
    db.write();
    console.log("written to db.json");
    res.sendStatus(201);
  }
  else {
    console.log("already in db.json");
    res.sendStatus(200);
  }
});

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('./.cert/private.key'),
  cert: fs.readFileSync('./.cert/certificate.crt'),
  //key: fs.readFileSync('./cert2/decathlon_pwa.key'),
  //cert: fs.readFileSync('./cert2/decathlon_pwa.cer'),
};

// add a route that lives separately from the SvelteKit app
app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('HelloWorld');
    console.log('HelloWorld');
  });


// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('ok');
    console.log('node');
  });

function sendNotifications(subscriptions) {
  subscriptions.forEach(subscription => {
    const endpoint = subscription.endpoint;
    const id = endpoint.substr((endpoint.length - 8), endpoint.length);
     //Create payload
    const payload = JSON.stringify({ title: 'Push Test' });
    webpush.sendNotification(subscription, payload)
      .then(result => {
        console.log(`Endpoint ID: ${id}`);
        console.log(`Result: ${result.statusCode}`);
      })
      .catch(error => {
        console.log(`Endpoint ID: ${id}`);
        console.log(`Error: ${error} `);
        console.log(`ErrorCode: ${error} `);
      });
  });
}
*/
// VRAIES ROUTES

function sendNotifications(subscriptions) {
  subscriptions.forEach(subscription => {
    const endpoint = subscription.endpoint;
    const id = endpoint.substr((endpoint.length - 8), endpoint.length);
     //Create payload
    const payload = JSON.stringify({ title: 'Vous êtes pas passés loin...' });
    webpush.sendNotification(subscription, payload)
      .then(result => {
        console.log(`Endpoint ID: ${id}`);
        console.log(`Result: ${result.statusCode}`);
      })
      .catch(error => {
        console.log(`Endpoint ID: ${id}`);
        console.log(`Error: ${error} `);
        console.log(`ErrorCode: ${error} `);
      });
  });
}

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('./.cert/private.key'),
  cert: fs.readFileSync('./.cert/certificate.crt'),
  //key: fs.readFileSync('./cert2/decathlon_pwa.key'),
  //cert: fs.readFileSync('./cert2/decathlon_pwa.cer'),
};

// add a route that lives separately from the SvelteKit app
app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('HelloWorld');
    console.log('HelloWorld');
  });

app.post('/add-subscription', async (request, response) => {
  console.log(`Subscribing ${request.body.endpoint}`);  
  const subscription = db.data.subscriptions.find(sub => sub.endpoint === request.body.endpoint);
  console.log(subscription);
  if(!subscription){
    db.data.subscriptions.push(request.body)
    await db.write();
    console.log("written to db.json");
    response.sendStatus(201);
  }
  else {
    console.log("already in db.json");
    response.sendStatus(200);
  }
});

app.post('/remove-subscription', async (request, response) => {
  console.log(`Unsubscribing ${request.body.endpoint}`);
  db.data.subscriptions.find.filter(e => e !== request.body.endpoint)
  await db.write();
  response.sendStatus(200);
});

app.post('/notify-me', (request, response) => {
  console.log(`Notifying ${request.body.endpoint}`);
  const subscription = 
      db.data.subscriptions.find(subscription => subscription.endpoint === request.body.endpoint);
  console.log("subscription", subscription);
  sendNotifications([subscription]);
  response.sendStatus(200);
});


app.post('/notify-all', (request, response) => {
  console.log('Notifying all subscribers');
  const subscriptions =
      [...db.data.subscriptions];
  console.log("subscriptions", subscriptions);
  if (subscriptions.length > 0) {
    sendNotifications(subscriptions);
    response.sendStatus(200);
  } else {
    response.sendStatus(409);
  }
});

app.use(handler);

// Create an HTTP service.
http.createServer(app).listen(8080);

// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(3000, () => {
    console.log('listening on port 3000');
  });
path = require('path')
var bodyParser = require('body-parser')
var https = require('https');

const app = require('express')()
module.exports = { path: '/api', handler: app }
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/hello', (req, res) => {
    console.log('hello nuxt in text')
    res.send('world')
})
app.get('/api1', (req, res) => {
  console.log('hello nuxt in text')
  https.get(process.env.URLAPI1, (resp) => {
    let data = '';
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
      res.send(data)
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})
app.get('/api2', (req, res) => {
  console.log('hello nuxt in text')
  https.get(process.env.URLAPI2, (resp) => {
    let data = '';
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
      res.send(data)
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})

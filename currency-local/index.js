//----------
// SERVER ENVIRONMENT VARIABLES
//----------

const server = 'currency-local/build';
const port = '7010';

//----------
// CREATE SERVER
//----------

// MODULES
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const open = require('open');

// DEFINE EXPRESS
const app = express();

// JSON FILE LOCATION
const jsonLocation = server + '/currencyData.json';

// CREATE STATIC SERVER
app.use(express.static(server));

// CREATE SERVER
app.listen(port, listening);
function listening() {
  console.log(server + ' server listening on port ' + port);
  open(`http://localhost:${port}`, { app: { name: 'google chrome' } });
}

//CREATE BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTE TO 'ADD' - POST NEW DATA TO JSON FILE
app.post('/add', addData);
function addData(request, response) {
  const parsedBody = request.body.data;
  const newData = JSON.stringify(parsedBody, null, 2);
  fs.writeFile(jsonLocation, newData, function (err, result) {
    if (err) {
      console.log(err);
    }
  });
  response.send('Updated Currency Data');
}

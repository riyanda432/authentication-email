const express = require('express');
const morgan = require ('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;

app.listen(port);
console.log(`Server is running on '${port}'`);
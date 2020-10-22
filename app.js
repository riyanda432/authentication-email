const express = require('express');
const morgan = require ('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.listen(port);

app.use('/users', require('./routes/users')); 

console.log(`Server is running on '${port}'`);


const express = require('express');

const mysql = require('mysql');
const cors = require('cors');

const port = 3001;
const bodyparser = require('body-parser');


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));

const router = require('./router/router');

app.use('api/v1/get',router);


app.listen(port, ()=> console.log('server is running!'));


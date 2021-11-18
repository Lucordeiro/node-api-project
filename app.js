var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors')
require('dotenv').config({ path: './Config/.env' })
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var balanceRouter = require('./routes/balance');
var transactionRouter = require('./routes/transactions');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/balance', balanceRouter);
app.use('/transactions', transactionRouter);

(async ()=>{
    const db = require('./Config/db');
    const user = require('./Models/User');
    const Balance = require('./Models/Balance');
    const Transactions = require('./Models/Transactions');
    db.sync();
    console.log(">>>>>>>>>>>>>>>>>",process.env.DB_NAME)

})();
module.exports = app;

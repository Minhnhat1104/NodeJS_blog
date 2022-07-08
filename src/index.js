const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

//Connect to Db
db.connect();

const app = express();
const port = 3000;
//config route static file
app.use(express.static(path.join(__dirname, 'public')));

//config route method override
app.use(methodOverride('_method'));

// cho việc submit qua html
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// cho việc submit qua các thư viện trong JS như: XMLhttp, fetch, axois
app.use(express.json());

// Http logger

// app.use(morgan("combined"));

// template handlebars
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);

// register the template engine
app.set('view engine', '.hbs');
// specify the views directory
app.set('views', path.join(__dirname, 'resources', 'views'));

// actions --> dispatcher --> funciton handler
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

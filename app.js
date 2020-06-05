/**
 * Module dependencies.
 */

const app = require('express')();
const nunjucks = require('nunjucks');
const configVars = require('./config');
let PORT = process.env.PORT || 5000;

app.set('view engine', 'html');

nunjucks.configure(['views/'], {
  autoescape: false,
  express: app,
});

require('./routes')(app);

app.listen(PORT, () => {
  console.log('Running on port', PORT);
});

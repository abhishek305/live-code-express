/**
 * Module dependencies.
 */

const app = require('express')();
const nunjucks = require('nunjucks');
const configVars = require('./config');
let port = configVars.port || 5000;

app.set('view engine', 'html');

nunjucks.configure(['views/'], {
  autoescape: false,
  express: app,
});

require('./routes')(app);

app.listen(configVars.port, () => {
  console.log('Running on port', port);
});

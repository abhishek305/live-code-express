/**
 * Module dependencies.
 */

const axios = require('axios');
const configVars = require('./config');

const getData = (url) => {
  const headerData = {
    headers: {
      api_key: configVars.apiKey,
      access_token: configVars.accessToken,
    },
  };
  return axios.get(url, headerData);
};

module.exports = {
  getData,
};

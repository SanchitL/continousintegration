// request.js
const request = require('request');

const apiUrl = 'https://swapi.co/api/';

const getStarWarsCharacterData = function characterData(endpoint, callback) {
  request.get(apiUrl + endpoint, (err, resp, body) => {
    callback(resp, JSON.parse(body));
  });
};

const getStatusCode = function statusCode(endpoint) {
  return new Promise((resolve) => {
    request.get(apiUrl + endpoint, (err, resp) => {
      resolve(resp.statusCode);
    });
  });
};

module.exports = {
  getStarWarsCharacterData,
  getStatusCode,
};

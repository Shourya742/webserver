const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current? access_key =b19991bc2814651ee4b65a59b4bcc763&query=" +
    latitude +
    "," +
    longitude +
    "&units=s";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, response.body);
    }
  });
};

module.exports = forecast;

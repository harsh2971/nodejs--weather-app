const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=793f1448a810e3559a3164c43d51d2c5&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to location service!", undefined);
    } 
    else if (response.body.error) {
      callback("unable to find location!", undefined);
    }
     else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          " degrees out,feels like " +
          response.body.current.feelslike
      );
    }
  });
};

module.exports = forecast;

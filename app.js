const { getWeather } = require("./weather.js");
const { getLocation } = require("./location.js");

const main = async input => {
  const locationObject = await getLocation(input);
  const response = await getWeather(locationObject);
  return response;
};

module.exports = { main };

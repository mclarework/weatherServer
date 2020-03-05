const axios = require("axios");
const mapKey =
  "pk.eyJ1IjoiY2xvdWR3YWxrIiwiYSI6ImNrN2J1bGthdjAwNmgzZW5zdHo0bWdqcmkifQ.xJs1a1LpduxDMC6ueXzZfg";

const getLocation = async location => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapKey}`;
  try {
    const response = await axios.get(URL);
    return {
      lat: response.data.features[0].center[1],
      lng: response.data.features[0].center[0],
      location: response.data.features[0].place_name
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getLocation };
const axios = require("axios");

const apodApi = axios.create({
  params: {
    api_key: process.env.api_key,
  },
  baseURL: "https://api.nasa.gov/planetary",
});

const deleteParams = () => {
  delete apodApi.defaults.params['date'];
};

const addParams = (param, value) => {
  apodApi.defaults.params[param] = value;
};

const getPhoto = () => apodApi.get("/apod", deleteParams());
const getDaily = (param, value) => apodApi.get(`/apod`, addParams(param, value));

module.exports = {
  getPhoto,
  getDaily
};

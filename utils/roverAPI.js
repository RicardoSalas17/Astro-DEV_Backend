const axios = require('axios');

const roverApi = axios.create({
    params: {
        api_key: process.env.api_key,
    },
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1',
  });


const addParam = (param, value) => {
    roverApi.defaults.params[param] = value;
  };

  const getAll = (roverName, param, value) => roverApi.get(`/rovers/${roverName}/photos`, addParam(param, value),)
  const getRoverInfo = (roverName) => roverApi.get(`/manifests/${roverName}`);
  const getFilterPhotos = (roverName, param, value, param1, value1) => roverApi.get(`/rovers/${roverName}/photos`, addParam(param, value), addParam(param1, value1),);


module.exports = {
    getAll,
    getRoverInfo,
    getFilterPhotos,
}

const axios = require('axios');

const apodApi = axios.create({
    params: {
        api_key: process.env.api_key,
    },
    baseURL: 'https://api.nasa.gov/planetary',
  });



const getPhotoWithDate = (param, value) => {
    apodApi.defaults.params[param] = value;
  };


  const getPhoto = () => apodApi.get('/apod')


module.exports = {
    getPhoto,
    getPhotoWithDate
}
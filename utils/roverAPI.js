const axios = require('axios');

const roverApi = axios.create({
    params: {
        api_key: process.env.api_key,
    },
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers',
  });



const addParam = (param, value) => {
    roverApi.defaults.params[param] = value;
  };

//   const deleteTicket = id => hubApi.delete(`/crm/v3/objects/tickets/${id}`)
  const getAll = (param, value) => roverApi.get('/curiosity/photos', addParam(param, value),)


module.exports = {
    getAll,
}
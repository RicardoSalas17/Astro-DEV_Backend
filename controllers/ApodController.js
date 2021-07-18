const apodApi = require('../utils/apodAPI');

module.exports = {
    getPhoto: async (req, res ) =>{
        const response = await apodApi.getPhoto();
        console.log(response)
        res.status(200).json({ message: 'get daily photo', daily_photo: response.data });
    }
};
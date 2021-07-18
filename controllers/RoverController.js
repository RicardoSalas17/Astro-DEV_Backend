const roverApi = require('../utils/roverAPI');

module.exports = {
    // getAllTickets: onHandlerError(async (req, res) => {
    //     const response = await hubspotAPI.getAllTickets();
    //     res.status(200).json({ message: 'Hubspot tickets list obtained ', tickets: response.data.results });
    //   }),

    getAll: async (req, res ) =>{
        const response = await roverApi.getAll('sol', 1000);
        console.log(response)
        res.status(200).json({ message: 'Rover photos obtainer ', rover_photos: response.data });
    }
};
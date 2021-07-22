const roverApi = require('../utils/roverAPI');

module.exports = {
    getAll: async (req, res ) =>{
        try{
            const roverName = req.params.rover_name;
            const response = await roverApi.getAll(roverName, 'sol', 1000);
            res.status(200).json({ message: 'Rover photos obtainer ', rover_photos: response.data });
        }
        catch {res.json({ message: 'error'})}
    },

    getRoverInfo: async (req, res ) =>{
        try{
            const roverName = req.params.rover_name;
            const response = await roverApi.getRoverInfo(roverName);
            res.status(200).json({ message: 'Rover info obtainer ', rover_info: response.data });
        }
        catch {res.json({ message: 'error'})}
    },

    getFilterPhotos: async (req, res ) =>{
        try{
            const roverCamera = req.params.rover_camara;
            const roverName = req.params.rover_name;
            const response = await roverApi.getFilterPhotos(roverName, 'sol', 1000, 'camera', roverCamera );
            res.status(200).json({ message: 'Rover filter by camera ', rover_filter: response.data });
        }
        catch {res.json({ message: 'error'})}
    },
};
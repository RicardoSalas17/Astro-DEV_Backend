const apodApi = require("../utils/apodAPI");

module.exports = {
  getPhoto: async (req, res) => {
    try{
    const responses = await apodApi.getPhoto();
    res
      .status(200)
      .json({ message: "get another photo", daily_photo: responses.data });
  }
  catch {res.json({ message: 'error'})}
  },
  getDaily: async (req, res) => {
try{
    const chosenDate = req.params.daily_photo;
    const response = await apodApi.getDaily("date", chosenDate);
    res
      .status(200)
      .json({ message: "get daily photo", daily_photo: response.data });
  }
      catch {res.json({ message: 'error'})}
    }
};
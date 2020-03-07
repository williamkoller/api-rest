const Attendeces = require("../models/attendences");
module.exports = app => {
  app.get("/attendences", (req, res) => {
    return res.status(200).send({
      message: "You are on route of attendences performing GET"
    });
  });
  app.post("/attendences", (req, res) => {
    const attendences = req.body;
    Attendeces.add(attendences, res);
    const response = {
      data_pet: {
        client: req.body.client,
        pet: req.body.pet,
        service: req.body.service,
        status: req.body.status,
        observetion: req.body.observetion,
        data: req.body.data
      }
    };
    console.log(response);
  });
};

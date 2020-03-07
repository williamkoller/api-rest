const Attendeces = require("../models/attendences");
module.exports = app => {
  app.get("/attendences", (req, res) => {
    Attendeces.list(res);
  });

  app.get("/attendences/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Attendeces.searchId(id, res);
  });
  app.post("/attendences", (req, res) => {
    const attendences = req.body;
    Attendeces.add(attendences, res);
  });

  app.patch("/attendences/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const value = req.body;
    Attendeces.edit(id, value, res);
  });
};

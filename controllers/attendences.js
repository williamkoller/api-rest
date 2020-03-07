module.exports = app => {
  app.get("/attendences", (req, res) => {
    return res.status(200).send({
      message: "You are on route of attendences performing GET"
    });
  });
  app.post("/attendences", (req, res) => {
    const response = {
      returnApi: {
        name: "William",
        message: "You are on route of attendences performing POST"
      }
    };
    console.log(response);
    return res.status(200).send(response);
  });
};

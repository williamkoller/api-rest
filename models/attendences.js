const moment = require("moment");
const conn = require("../database/connection");

class Attendences {
  add(attendences, res) {
    const dataCreate = moment().format("YYYY-MM-DD HH:MM:SS");
    const data = moment(attendences.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );
    const attendencesData = { ...attendences, dataCreate, data };
    const sql = "INSERT INTO attendences SET ?";
    conn.query(sql, attendencesData, (err, results) => {
      if (err) {
        res.json(err);
      } else {
        res.json(results);
      }
    });
  }
}

module.exports = new Attendences();

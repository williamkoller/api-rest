const moment = require("moment");
const conn = require("../database/connection");

class Attendences {
  add(attendences, res) {
    const dataCreate = moment().format("YYYY-MM-DD HH:MM:SS");
    const data = moment(attendences.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );
    const dataIsValid = moment(data).isSameOrAfter(dataCreate);
    const clientIsValid = attendences.client.length >= 5;
    const valid = [
      {
        name: "data",
        valide: dataIsValid,
        message: "Data tem que ser maior ou igual a data atual"
      },
      {
        name: "client",
        valide: clientIsValid,
        message: "Cliente deve ter pelos menos cinco caracteres"
      }
    ];
    console.log(valid);
    const erros = valid.filter(fields => !fields.valide);
    const existsErros = erros.length;

    if (existsErros) {
      res.status(400).json(erros);
    } else {
      const attendencesData = { ...attendences, dataCreate, data };
      const sql = "INSERT INTO attendences SET ?";
      conn.query(sql, attendencesData, (err, results) => {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(201).json(results);
        }
      });
    }
  }

  list(res) {
    const sql = "SELECT * FROM attendences";
    conn.query(sql, (err, results) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(results);
      }
    });
  }

  searchId(id, res) {
    const sql = `SELECT * FROM attendences WHERE id = ${id}`;
    conn.query(sql, (err, results) => {
      const attendences = results[0];
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(attendences);
      }
    });
  }

  edit(id, value, res) {
    if (value.data) {
      value.data = moment(value.data, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:MM:SS"
      );
    }
    const sql = "UPDATE attendences SET ? WHERE id = ?";
    conn.query(sql, [value, id], (err, results) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(results);
      }
    });
  }
}

module.exports = new Attendences();

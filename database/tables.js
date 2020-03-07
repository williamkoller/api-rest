class Tables {
  init(conn) {
    this.conn = conn;
    this.createAttendences();
  }
  createAttendences() {
    const sql = `CREATE TABLE IF NOT EXISTS attendences 
            (
                id INT NOT NULL AUTO_INCREMENT,
                client VARCHAR(50) NOT NULL,
                pet VARCHAR(20),
                service VARCHAR(20) NOT NULL,
                data DATETIME NOT NULL,
                dataCreate DATETIME NOT NULL,
                status VARCHAR(20) NOT NULL,
                observetion TEXT,
                PRIMARY KEY(id)
            )
            `;

    this.conn.query(sql, err => {
      if (sql) {
        console.log("tables exists");
      }
      if (err) {
        console.log(err);
      } else {
        console.log("table attendences creating w/ success!!");
      }
    });
  }
}

module.exports = new Tables();

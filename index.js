const customExpress = require("./config/custom-express");
const conn = require("./database/connection");
const tables = require("./database/tables");
conn.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect database");
    tables.init(conn);
    const app = customExpress();
    const port = 3003;
    app.listen(port, () => console.log(`server running: ${port}`));
  }
});

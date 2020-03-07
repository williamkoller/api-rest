const customExpress = require("./config/custom-express");
const app = customExpress();
const port = 3003;
app.listen(port, () => console.log(`server running: ${port}`));

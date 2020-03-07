const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3003;
app.use(morgan('dev'));
app.listen(port, () => console.log(`server running: ${port}`));
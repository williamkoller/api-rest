const express = require('express');
const morgan = require('morgan');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    consign(app).include('controllers').into(app);
    return app;
}
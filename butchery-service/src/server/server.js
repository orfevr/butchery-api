const express = require('express');
const bodyparser = require('body-parser');
const butchery = require('../api/butchery');

const start = (diContainer) => {
    return new Promise((resolve, reject) => {
        const { port } = diContainer.serverSettings;
        const repository = diContainer.repository;

        if (!port) {
            reject(new Error('The port must be configured before starting the server.'));
        }

        const apiSever = express();
        apiSever.use(bodyparser.json());
        apiSever.use((err, request, response, next) => {
            response.status(500).send('Something wend wrong');
            next();
        });

        const api = butchery.bind(null, { repository });
        api(apiSever);

        const server = apiSever.listen(port, () => {
            resolve(server);
        });
    });
};

module.exports = Object.assign({}, { start });

'use strict'

const repository = require('./repository/repository');
const server = require('./server/server');
const di = require('./config');
const { EventEmitter } = require('events');
const appEvents = new EventEmitter();

console.log('--- Butcher API ---');
console.log('Connecting to repository...');

process.on('uncaughtException', (err) => {
    console.error('Unhandled error: ', err);
});

process.on('uncaughtRejection', (err, promise) => {
    console.error('Unhandled error: ', err);
});

appEvents.on('di.ready', async (diContainer) => {
    try {
        const repo = await repository.connect(diContainer);
        diContainer.repository = repo;
        console.log('Connected. Starting server ...');
        const app = await server.start(diContainer);
        console.log(`Server started succesfully, running on port ${diContainer.serverSettings.port}.`);

        app.on('close', () => {
            console.log('[close] event.');
            //diContainer.repository.disconnect();
        });
    } catch (error) {
        console.error('Unhandled error: ', error);
    }

});

di.init(appEvents);

appEvents.emit('init');
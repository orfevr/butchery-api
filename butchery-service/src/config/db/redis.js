const redis = require('redis');

const connect = (options, appEvents) => {
    appEvents.once('boot.ready', () => {
        
        console.log('Connecting settings: [' + options.host + ':' + options.port + ']');
        let redisHost = options.host || '127.0.0.1';
        let redisPort = options.port || '6379';
        console.log('Connecting to Redis on [' + redisHost + ':' + redisPort + ']');
        
        const db = redis.createClient(redisPort, redisHost);

        db.on('error', (err) => {
            appEvents.emit('db.error', err);
        });

        db.on('ready', () => {
            console.log('Redis is ready!');
            console.log('Starting api ...');

            appEvents.emit('db.ready', db);
        });
    });
};

module.exports = Object.assign({}, { connect });
const redis = require('redis');

var redisHost = process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1';
// TODO remove: 'process.argv[2]'
var redisPort = process.env.REDIS_PORT_6379_TCP_PORT || process.argv[2] || 6379;

console.log('Connecting to Redis on [' + redisHost + ':' + redisPort + ']');
const client = redis.createClient(redisPort, redisHost);

client.on('ready', () => {
    console.log('Redis client ready!');
});
client.on('error', (err) => {
    console.error('Error occured: ', err);
});
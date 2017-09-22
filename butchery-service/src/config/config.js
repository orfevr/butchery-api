const dbSettings = {
    host: process.env.REDIS_PORT_6379_TCP_ADDR,
    port: process.env.REDIS_PORT_6379_TCP_PORT
};

const serverSettings = {
    port: process.env.PORT || 8001
};

module.exports = Object.assign({}, { dbSettings, serverSettings });
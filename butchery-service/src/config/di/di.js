const initDI = ({ serverSettings, dbSettings, database }, appEvents) => {
    appEvents.once('init', async () => {

        appEvents.on('db.ready', (db) => {
            const diContainer = {
                database: db,
                serverSettings: serverSettings
            };
            appEvents.emit('di.ready', diContainer);
        });

        appEvents.on('db.error', (err) => {
            appEvents.emit('di.error', err);
        });

        database.connect(dbSettings, appEvents);

        appEvents.emit('boot.ready');
    });
};

module.exports.initDI = initDI;
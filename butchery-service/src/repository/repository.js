'use strict'

const repository = (diContainer) => {
    const { database: db } = diContainer;

    const getLambPrice = async () => {
        return new Promise((resolve, reject) => {
            db.hgetall('price:lamb', (err, data) => {
                let lamb = data;
                if (!lamb) {
                    lamb = {
                        neck: 1,
                        shoulder: 1,
                        rib: 1,
                        loin: 1,
                        sirloin: 1,
                        leg: 1,
                        breast: 1,
                        flank: 1,
                        foreshank: 1,
                        hindshank: 1
                    };
                    db.hmset('price:lamb', lamb);
                }
                resolve(lamb);
            });
        });
        // try {
        //     let lamb = await callbackToPromise(db.hgetall, 'price:lamb');
        //     if (!lamb) {
        //         lamb = {
        //             neck: 1,
        //             shoulder: 1,
        //             rib: 1,
        //             loin: 1,
        //             sirloin: 1,
        //             leg: 1,
        //             breast: 1,
        //             flank: 1,
        //             foreshank: 1,
        //             hindshank: 1
        //         };
        //         db.hmset('price:lamb', lamb);
        //     }
        //     return lamb;

        // } catch (error) {
        //     console.error('Error in getLambPrice: ', error);
        //     return { error: error };
        // }
    };

    return Object.create({
        getLambPrice
    });
};

function callbackToPromise(method, ...args) {
    return new Promise(function (resolve, reject) {
        return method(...args, function (err, result) {
            return err ? reject(err) : resolve(result);
        });
    });
}

const connect = async (db) => {
    return repository(db);
}

module.exports = Object.assign({}, { connect });
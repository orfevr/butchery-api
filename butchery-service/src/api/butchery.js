'use strict'

module.exports = ({ repository }, app) => {
    app.get('/lamb/price', (request, response, next) => {
        repository.getLambPrice()
            .then((data) => {
                response.json(data);
            })
            .catch(next);
    });
}
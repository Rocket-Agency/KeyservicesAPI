payment = require('../controllers/payment');

module.exports = (app) => {
 app.post('/api/payment', payment.create)
}
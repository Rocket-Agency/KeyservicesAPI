const Stripe = require('stripe');
// don't commit your real stripe secret key... use env variables!!
// https://www.leighhalliday.com/secrets-env-vars-nextjs-now
const stripe = new Stripe("sk_test_Rf8sLyA9IRbnKJ99exQaaEgq00h4F7Do6o");

module.exports = {
    async create(req, res){
    const { id, amount } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
        amount,
        currency: "EUR",
        description: "Mise en ligne de l'annonce0",
        payment_method: id,
        confirm: true
        });

        console.log(payment);

        return res.status(200).json({
        confirm: "abc123"
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
        message: error.message
        });
    }
        }
}
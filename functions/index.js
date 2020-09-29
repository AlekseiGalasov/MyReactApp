const functions = require('firebase-functions');
const nodeMailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config')

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password,
    }
});

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
    const options = {
        from: `MrDonald's <${email}>`,
        to: data.email,
        subject: `Ваш заказ из MrDonald's`,
        html: `
            <div>
                <h2>Добрый день ${data.nameClient}</h2>
                <h3>Ваш заказ:</h3>
                <ul>
                    ${data.order.map(({name, count, price, topping, choices}) => (
                        `<li>${name} ${choices === "no choices" ? '' : choices} - ${count}шт. ${topping === "no toppings" ? ''  : 'Добавки: ' + topping} , цена ${topping === "no toppings" ? (price * count).toFixed(2) :((price + (topping.length *  (price * 0.1))) * count).toFixed(2)} евро.</li>`)
                    )}
                </ul>
                <p>Итого: ${(data.totalPrice).toFixed(2)} евро.</p>
                <small>P.S. привет максимка!</small>

            </div>
        `,
    };
    transporter.sendMail(options)
}

exports.sendUserEmail = functions.database.ref('orders/{pushID}')
    .onCreate(order => sendOrderEmail(order.val()));

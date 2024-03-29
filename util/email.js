const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config();
const sendGridAPIKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "amankale@rapidinnovation.dev",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. let me know how you get along with the app`,
  });
};
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "amankale@rapidinnovation.dev",
    subject: "bye bye!",
    text: `its so sad to see you go, ${name}. `,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};

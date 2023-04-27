const { buildSchema } = require("graphql");

const schemaMail = buildSchema(`
  type Query {
    sendEmailOrder(
        request:String!
    ): String
  }
`);

// The root provides a resolver function for each API endpoint
const rootMail = {

  sendEmailOrder: (args) => {
    let state =  JSON.parse(args.request);
    let email = {
      subject: "Request by " + state.fname + " " + state.lname ,
      text: "Fecha de Entrega: " + new Date(state.date).toString() + `\n` +
      "Torta de: " + state.flavor +"\nTamaño: " + state.size.toString() + "lb" +
      "\nInformacion Addicional: " + state.info + "\nNumero: " + state.phone +
      "\nEmail: " + state.email
    };
    mailer(email.subject, email.text).catch(e=>console.log(e));
  },
};
async function mailer(subject, text) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.BUSINESS_EMAIL, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    
    from: process.env.BUSINESS_EMAIL,
    to: process.env.TEST_RECIEVER, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

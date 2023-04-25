const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const nodemailer = require("nodemailer")


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    sendEmailOrder(
        request:String!
    ): String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {

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
    return "HELLO";

  },
};

const app = express();

// Enable CORS for all origins
app.use(cors());
app.use("auth", require("./API/auth"));
app.use("/galleria", require("./API/images"));
app.use(
  "/order",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    variables: true
  })
);

app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});

async function mailer(subject, text) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "tortasbyandreabucara@gmail.com", // generated ethereal user
      pass: "ynhebwzbgverrdhw", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    
    from: "tortasbyandreabucara@gmail.com",
    to: "nick2000@live.ca", // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

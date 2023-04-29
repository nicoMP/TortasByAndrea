const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const port = process.env.PORT_SERVER || 4000;
const cors = require("cors");
const nodemailer = require("nodemailer");
const pool = require("./DB");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('config');

// Construct a schema, using GraphQL schema language
const public_schema = buildSchema(`
  type Query {
    login(
      username:String!
      password:String!
    ) : String
    sendEmailOrder(
        request:String!
    ): String
    
  }
  type Mutation{
    registerClient(
      fname:String!
      lname:String!
      phone:Float!
      email:String!
      password:String!
    ):String!
  }
  type User {
    fname:String!
    lname:String!
    phone:Float!
    email:String!
  }
  

`);

// The root provides a resolver function for each API endpoint
const public_root = {

  sendEmailOrder: (args) => {
    let state =  JSON.parse(args.request);
    let email = {
      subject: "Request by " + state.fname + " " + state.lname ,
      text: "Fecha de Entrega: " + new Date(state.date).toString() + `\n` +
      "Torta de: " + state.flavor +"\nTamaño: " + state.size.toString() + "lb" +
      "\nInformacion Addicional: " + state.info + "\nNumero: " + state.phone +
      "\nEmail: " + state.email
    };
    mailer(email.subject, email.text, "nick2000@live.ca").catch(e=>console.log(e));
    return `Request Sent Contact `+ state.phone
  },
  login: async (args) =>{
    try{
      const {userid, isadmin} = (await pool.query('Select userid, isadmin FROM Users WHERE phone = $1',[args.username])).rows[0];
      const hash = (await pool.query('Select * FROM Login WHERE userid = $1', [userid])).rows[0].hashedpassword;
      const payload = {userid:userid, isadmin:isadmin} 
      const token = (signJWT(payload));
      if(await compareHash(args.password, hash)){
        return "logged-in"
      } else {
        return "wrong-password"
      }
    }
    catch(err) {
      return "user-not-found"
    }
  },
  registerClient: async (args)=>{
    try{
      const {rows} = await pool.query('INSERT INTO users (fname, lname, phone, email) VALUES ($1, $2, $3, $4) RETURNING userid', [args.fname,args.lname,args.phone,args.email]);
      const hpswrd = await hashValue(args.password);
      await pool.query('INSERT INTO login (userid, hashedpassword) VALUES ($1, $2)', [rows[0].userid, hpswrd])
      return "Confirmation Email Sent!";
    } catch(err) {
      return err;
    }
  }
};

const app = express();

// Enable CORS for all origins
app.use(cors());
app.use("/galleria", require("./API/images"));
app.use(
  "/",
  graphqlHTTP({
    schema: public_schema,
    rootValue: public_root,
    graphiql: true,
    variables: true
  })
);

app.listen(port, () => {
  console.log(`Running a GraphQL API server at http://localhost:${port}/`);
});

async function mailer(subject, text, to) {
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
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}
async function hashValue(plaintext, security=10){
  const hash = await bcrypt.hash(plaintext, security);
  return hash;
}
async function compareHash(plaintext, hash){
  const match = await bcrypt.compare(plaintext, hash);
  return match;
}
async function signJWT(payload){
  return jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 3600 },
    );
}
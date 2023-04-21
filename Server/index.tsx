var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")
const cors = require('cors');


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
    type Query {
    hello: String,
    sendEmailOrder: String
    }
  
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!"
  },
  sendEmailOrder: () =>{
    return JSON.stringify({
        from: 'tortasbyandreabucara@gmail.com',
        to: 'nick2000@live.ca',
        subject: 'Request by ' ,// + this.state.fname + " " + this.state.lname ,
        text: "Fecha de Entrega: "// + this.state.date.toString() + `\n` +
        //                     "Torta de: " + this.state.flavor +"\nTamaño: " + this.state.size.toString() + "lb" +
        //                     "\nInformacion Addicional: " + this.state.info +
        //                     "\nNumero: " + this.state.phone +
        //                     "\nEmail: " + this.state.email
                                
    })
  }
}

var app = express()
app.use(cors)
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")
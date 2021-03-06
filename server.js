const express = require('express')
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema.js')
const cors = require('cors');

const app = express();

// Allow cross-origin
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,     //tool that can be used as a client to make queries to the server
  }),
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});
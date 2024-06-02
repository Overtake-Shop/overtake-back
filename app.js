const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./routes');

const app = express()
require('dotenv').config()


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}${process.env.MONGO_CLUSTER}/?retryWrites=true&w=majority&appName=products`)
.then(() => {
  console.log("Successfully connected to database")
}).catch((err) => {console.log("Error db connction: ",err)})

app.use((req, res, next) => {
  console.log('Requête reçue !');
});

app.use('/api/', apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})
const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

const apiRouter = require('./routes');


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}${process.env.MONGO_CLUSTER}/?retryWrites=true&w=majority&appName=products`)
.then(() => {
  console.log("Successfully connected to database")
}).catch((err) => {console.log("Error db connction: ",err)})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/', apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})
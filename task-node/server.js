const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');

const app = new express();
const server = http.createServer(app);
const products = require('./routes/products');
const guarantee = require('./routes/guarantee');

require('./seed/index');

const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/products',{
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// open the connection
const db = mongoose.connection;
db.once('open', () => console.log('connected to Mongoose db'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) => res.send('backend App'));

app.use('/api/products', products);
app.use('/api/guarantee', guarantee);

// listen of server
server.listen(port, () => {
  console.log('Server running on port', port);
});

const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');
const productsCtrl = require('./products_controller')
let port = 3000;

const app = module.exports = express();
app.use(json());
app.use(cors());

massive(config.connectionString).then(dbInstance => {
    app.set('db', dbInstance);
})

app.post('/api/product', productsCtrl.create);

app.get('/api/product/:id', productsCtrl.getOne);
app.get('/api/products', productsCtrl.getAll);

app.put('/api/product/:id', productsCtrl.update);

app.delete('/api/product/:id', productsCtrl.delete);

app.listen(port, () => {console.log("Listening on port: " + port)})
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
require('dotenv').config()
const port = 3021;
const c = require('./controller.js')

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../build'))


app.get('/api/products', c.getAll)

app.get('/api/product/:id', c.getOne)



app.post('/api/product', c.addProduct)



app.put('/api/product/:id', c.updateProduct)



app.delete('/api/product/:id', c.deleteProduct)



massive(process.env.CONNECTION_STRING).then(db =>{
    app.set('db', db)
    
    app.listen(port, () => {
      console.log('Started server on port', port);
    });
})

